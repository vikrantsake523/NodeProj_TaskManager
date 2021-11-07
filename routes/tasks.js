const express = require('express')
const router = express.Router()

//1st way
// const tasks = require('../controllers/tasks')

//2nd way - clean
const {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')

// for 1st way
// router.route('/').get(tasks.getAllTasks).post(tasks.createTask)
// router.route('/:id').get(tasks.getSingleTask).patch(tasks.updateTask).delete(tasks.deleteTask)

//for 2nd way
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router