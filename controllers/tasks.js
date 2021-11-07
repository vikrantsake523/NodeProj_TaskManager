const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
}

const getSingleTask = async (req, res) => {
    // res.send('get single task')
    //res.json({id: req.params.id})

    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
}


const deleteTask = async (req, res) => {
    // res.send('delete tasks')
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req, res) => {
    // await res.send('update tasks')
    try {
        const {id:taskID} = req.params
        // const task = await Task.findOneAndUpdate({_id:taskID},req.body)
        // res.status(200).json({id:taskID, data: req.body})

        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new: true,
            runValidators: true,
        })
        
        if(!task){
            return res.status(404).json({msg: `No Task with id: ${taskID}`})
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({msg: error})
    }
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}