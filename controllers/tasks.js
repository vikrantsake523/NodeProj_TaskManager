const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    // res.send('get single task')
    res.json({id: req.params.id})
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        console.log(error)
    }
}

const updateTask = (req, res) => {
    res.send('update tasks')
}

const deleteTask = (req, res) => {
    res.send('delete tasks')
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}