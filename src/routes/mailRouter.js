/**
 * @file Maps mail routes to actions.
 * @module mailRouter
 */

import express from 'express'
import { MailController } from '../controllers/MailController.js'

const controller = new MailController()
export const router = express.Router()

router.post('/', controller.validateData, controller.sanitizeMarkup, async (req, res, next) => { await controller.sendMail(req, res, next )})