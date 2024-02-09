/**
 * @file Maps home routes to actions.
 * @module homeRouter
 */

import express from 'express'
import { HomeController } from '../controllers/HomeController.js'

const controller = new HomeController()
export const router = express.Router()

router.get('/', (req, res) => { controller.index(req, res) })