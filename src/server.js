import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { router } from './routes/router.js'

const app = express()
const port = process.env.PORT || 5050

// Get the full directory path of this module.
const directoryPath = dirname(fileURLToPath(import.meta.url))

// Serve static files.
app.use(express.static(join(directoryPath, '..', 'public')))
// Parse requests of the content-type application/json.
// Populates the request object with a body object (req.body).
app.use(express.json())

// Register routes.
app.use('/', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})