const express = require('express');
const router = express.Router();
const { createTask, showTasks, showTask, editTask } = require('../controllers/api/task')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Wild Code School' });
})

router.get('/tasks', showTasks);

router.post('/tasks/new', createTask);

router.get('/task/:id', showTask);

router.post('/task/:id/edit', editTask);


module.exports = router;
