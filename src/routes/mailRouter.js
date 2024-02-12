/**
 * @file Maps mail routes to actions.
 * @module mailRouter
 */

import express from 'express'
import { MailController } from '../controllers/MailController.js'

const controller = new MailController()
export const router = express.Router()

router.get('/', async (req, res, next) => { controller.indexPost(req, res, next )})