/**
 * @file Defines the MailController class.
 * @module MailController
 */

import nodemailer from 'nodemailer'
import sanitize from 'sanitize-html'
import { google } from 'googleapis'

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
  validateData(req, res, next) {
    const { flname, email, message } = req.body
    if (flname && email && message) {
      // Validate email with regular expression.
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (!re.test(email.trim())) {
        res.status(400).json({ "messageStatus": false, "message": "Invalid email." })
      }
      next()
    } else {
      res.status(400).json({ "messageStatus": false, "message": "Fill out all fields." })
    }
  }

  /**
   * Generates markup content and sanitizes it.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  sanitizeMarkup(req, res, next) {
    const { flname, email, message } = req.body
    // The HTML content.
    let markupContent = `
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

    // Sanitize the markup content and append result to request object.
    req.sanitizedMarkup = sanitize(markupContent)
    next()
  }

  /**
   * Sends the mail to admin.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async sendMail(req, res, next) {
    try {
      const { flname, email, message } = req.body

      // Create a nodemailer transport object using SMTP.
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      const mailOptions = {
        from: email.trim(),
        to: process.env.SMTP_USER,
        replyTo: email.trim(),
        subject: `${flname.trim()} requests audience`,
        html: req.sanitizedMarkup,
      }

      // Send the message over SMTP.
      await transporter.sendMail(mailOptions)
      res.json({ "messageStatus": true, "message": "Thanks! I'll be in touch soon." })

    } catch (error) {
      console.error(error)
      res.json({ "messageStatus": false, "message": "Failed to send message." })
    }
  }
}