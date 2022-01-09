const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')


exports.createUser = async (req, res) => {

    //check error
    const errors = validationResult(req)
    if(!errors. isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req. body

    try {
        //check if user is unique
        let user = await User.findOne({email})
        
        if(user) {
            return res.status(400).json({msg: 'User already exists'})
        }


        //create new user
        user = new User(req.body)
        
        //hash password, salt permit generate one unique hash
        const salt = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(password, salt)

        //save new user
        await user.save()

        //create and sign JWT
        const payload = {
            user:{
                id: user.id
            }
        }

        //sign jwt
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token)=>{
            if(error) throw error
            res.json({token})
        })

        //confirmation message
        // res.json({msg: 'User created correctly'})


    } catch (error) {
        console.log(error);
        res.status(400).send('there was an error')
    }



}