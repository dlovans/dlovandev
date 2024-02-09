/**
 * @file Defines the HomeController class.
 * @module HomeController
 */

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Encapsulates a controller.
 */
export class HomeController {
  /**
   * Sends the HTML file to the client.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   */
  index (req, res) {
    // Get the full directory path of this module.
    const directoryPath = dirname(fileURLToPath(import.meta.url))
    res.sendFile(join(directoryPath, '..', 'views/index.html'))
  }
}