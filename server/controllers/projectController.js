const Project = require('../models/Project')
const {validationResult} = require('express-validator')

exports.createProject = async (req, res) => {

    //check if errors
    const errors = validationResult(req)
    if(!errors. isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        //create a new project
        const project  = new Project(req.body)

        //save owner by jwt
        project.owner = req.user.id
        //save project
        project.save()
        res.json(project)

    } catch (error) {
        console.log(error);
        res.status(500).send('there was an error')
    }
}

//get all projects from current user
exports.getProjects = async (req, res) => {
    try {

        const projects = await Project.find({owner: req.user.id})
        res.json(projects)
    } catch (error) {
        console.log(error);
        res.status(500).send('there was an error')
    }
}

//update project
exports.updateProject = async (req, res) => {
       //check if errors
       const errors = validationResult(req)
       if(!errors. isEmpty()){
           return res.status(400).json({errors: errors.array()})
       }

      //extract info from project
      const {name} = req.body
      const newProject = {} 

      if(name){
          newProject.name = name
      }

      try {
          //check id
          let project = await Project.findById(req.params.id) 
          //check if project exist
          if(!project){
              return res.status(404).json({msg: 'project not found'})
          }  
          //check owner
          if(project.owner.toString() !== req.user.id){
              return res.status(401).json({msg: 'no authorized'})
          }

          //update
          project = await Project.findOneAndUpdate({_id: req.params.id}, {$set: newProject}, {new: true})
          res.json({project})
          
      } catch (error) {
        console.log(error);  
        res.status(500).send('there was an error')       
      }
}