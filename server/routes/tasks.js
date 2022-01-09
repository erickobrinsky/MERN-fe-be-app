const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//create taks
// api/tasks
router.post('/',
auth, 
[
    check('name', 'task name is mandatory').not().isEmpty(),
    check('project', 'project name is mandatory').not().isEmpty()
],
taskController.createTask
)


//get tasks by project
router.get('/',
auth,
taskController.getTasks
)

//update tasks by ID
router.put('/:id',
auth, 
[
    check('name', 'task name is mandatory').not().isEmpty()
],
taskController.updateTask
)

//delete tasks by ID
router.delete('/:id',
auth, 
taskController.deleteTask
)



module.exports = router