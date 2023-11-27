const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

/* Middleware */
router.use(require('../middlewares/logger.middleware'))

/* Routes */
router.post('/', taskController.insert)

module.exports = router