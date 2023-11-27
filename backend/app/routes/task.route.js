const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

/* Middleware */
router.use(require('../middlewares/logger.middleware'))

/* Routes */
router.get('/', taskController.getAll)
router.post('/', taskController.insert)
router.delete('/', taskController.deleteById)

module.exports = router