/**
 * @file Defines the main router.
 * @module router
 */

import express from 'express'
import { router as homeRouter } from './homeRouter.js'
import { router as mailRouter } from './mailRouter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/smtp', mailRouter)