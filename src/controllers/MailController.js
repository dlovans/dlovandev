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
}