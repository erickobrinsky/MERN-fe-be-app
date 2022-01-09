const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

exports.authUser = async  (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //extract email and password
    const {email, password} = req.body

    try {
        //check if is a user registered
        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({msg: 'User not found'})
        }
        //if exist so check password
        const passCorrect = await bcryptjs.compare(password, user.password)
        if(!passCorrect) {
            return res.status(400).json({msg: 'wrong password'})
        }
        //if everything is correct so create and sign JWT 
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

    } catch (error) {
        console.log(error);
    }

}