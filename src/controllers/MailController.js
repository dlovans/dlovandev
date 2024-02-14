/**
 * @file Defines the MailController class.
 * @module MailController
 */

import nodemailer from 'nodemailer'

/**
 * Encapsulates a controller.
 */
export class MailController {
  /**
   * Validates form data.
   *
   * @param {object} req - Express request object. 
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @see {@link https://regexr.com/3e48o} - Regular expression pattern for email.
   */
  validateData (req, res, next) {
    const { flname, email, message } = req.body
    if (flname && email && message) {
      // Validate email with regular expression.
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (!re.test(email.trim())) {
        res.status(400).json({ "messageStatus": false, "message": "Invalid email."})
      }
      next()
    } else {
      res.status(400).json({ "messageStatus": false, "message": "Fill out all fields." })
    }
  }

  /**
   * Sends the mail to admin.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async sendMail (req, res, next) {
    try {
      const { flname, email, message } = req.body

      // Create a nodemailer transport object using SMTP.
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE_PROVIDER,
        secure: true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
      })

      // The HTML content.
      const markupContent = `
        <html>
        <head>
          <title>Message from ${flname.trim()}</title>
        </head>
        <body>
          <h1>${flname.trim()}:</h1>
          <p>${message}</p>
        </body>
      </html>
      `

      // Send the message over SMTP.
      await transporter.sendMail({
        from: email.trim(),
        to: process.env.USER,
        subject: `${flname.trim()} requests audience`,
        html: markupContent
      })
    } catch (error) {
      error.status = 500
      error.message = 'Error: failed to send message over SMTP.'
      next(error)
    }
  }
}