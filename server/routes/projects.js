const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projectController')
const auth = require('../middleware/auth')
const {check} = require('express-validator')

//create projects
// api/projects
router.post('/',
auth, 
[
    check('name', 'project name is mandatory').not().isEmpty()
],
projectController.createProject
)


//get all projects
router.get('/',
auth, 
projectController.getProjects
)

//update projects by ID
router.put('/:id',
auth, 
[
    check('name', 'project name is mandatory').not().isEmpty()
],
projectController.updateProject
)

module.exports = router