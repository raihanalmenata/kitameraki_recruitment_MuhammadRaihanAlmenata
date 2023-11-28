const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

/* Middleware */
router.use(require('../middlewares/logger.middleware'))

/* Routes */
router.get('/', taskController.get)
router.post('/', taskController.insert)
router.delete('/', taskController.deleteById)
router.put('/', taskController.updateById)

module.exports = router