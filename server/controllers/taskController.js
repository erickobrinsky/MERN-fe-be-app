const Task = require('../models/Task')
const Project = require('../models/Project')
const {validationResult} = require('express-validator')
const router = require('../routes/tasks')


//create new task
exports.createTask = async (req, res) => {
   
    //check if errors
       const errors = validationResult(req)
       if(!errors. isEmpty()){
           return res.status(400).json({errors: errors.array()})
       }


       try {
           
            //extract project and check if exist
            const {project} = req.body

            const existProject = await Project.findById(project)
            if(!existProject) {
                return res.status(404).json({msg: 'Project not found'})
            }
            //check if current project is from user authentificated
            if(existProject.owner.toString() !== req.user.id){
                return res.status(401).json({msg: 'No authorized'})
            }

            //create task
            const task = Task(req.body)
            await task.save()
            res.json({task})
       } catch (error) {
           console.log(error);
           res.status(500).json('there was an error')
       }
}

//get task by project
exports.getTasks = async (req, res) => {
    try {
               //extract project and check if exist
               const {project} = req.body

               const existProject = await Project.findById(project)
               if(!existProject) {
                   return res.status(404).json({msg: 'Project not found'})
               }
               //check if current project is from user authentificated
               if(existProject.owner.toString() !== req.user.id){
                   return res.status(401).json({msg: 'No authorized'})
               }

               //get tasks by project
               const task = await Task.find({project})
               res.json({task})
   
    } catch (error) {
        console.log(error);
        res.status(500).json('there was an error')
    }
}

//update task
exports.updateTask = async (req, res) => {
try {

                const {project, name, state } = req.body

                let task = await Task.findById(req.params.id)

               if(!task){
                return res.status(404).json({msg: 'task not exist'})
               }
 
               const existProject = await Project.findById(project)
                //check if current project is from user authentificated
                if(existProject.owner.toString() !== req.user.id){
                    return res.status(401).json({msg: 'No authorized'})
                }

               //create an object with new info
                const newTask = {}
                if(name) newTask.name = name
                if(state) newTask.state = state
            
                task = await Task.findOneAndUpdate({_id: req.params.id }, newTask, {new: true} )

                res.json({task})
    
} catch (error) {
    console.log(error);
    res.status(500).send('there was an error')
}


}

//delete task
exports.deleteTask = async (req, res) => {
try{
    const {project} = req.body

    let task = await Task.findById(req.params.id)

   if(!task){
    return res.status(404).json({msg: 'task not exist'})
   }

   const existProject = await Project.findById(project)
    //check if current project is from user authentificated
    if(existProject.owner.toString() !== req.user.id){
        return res.status(401).json({msg: 'No authorized'})
    }

    //delete
    await Task.findByIdAndRemove({_id: req.params.id })
    res.json({msg: 'Task deleted'})
 

} catch (error) {
console.log(error);
res.status(500).send('there was an error')
}
}






