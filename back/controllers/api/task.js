const express = require('express');
const Task = require('../../models/Task');

const createTask = (req, res, next) => {
    const newTask = new Task({
        content: req.body.content,
        isDone: req.body.isDone
    });

    newTask.save((err, savedTask) => {
        if(err) {
            res.json(err);
        }
        res.json({ savedTask });
    })
}

const showTasks = (req, res, next) => {
    Task.find({}, (err, foundTasks) => {
        if (err) {
            res.json(err);
        }
        res.json({ foundTasks });
    })
}

const showTask = (req, res, next) => {
    Task.findById(req.params.id, (err, foundTask) => {
        if (err) {
            res.json(err);
        }
        res.json({ foundTask });
    }) 
}

const editTask = (req, res, next) => {
    Task.findById(req.params.id, (err, foundTask) => {
        if (err) {
            res.json(err);
        }
        foundTask.content = req.body.content;
        foundTask.isDone = req.body.isDone;
        foundTask.save((error, savedTask) => {
            if (error) {
                res.json(error);
            }
            res.json({ savedTask })
        })
    })
}

module.exports = { createTask, showTasks, showTask, editTask };