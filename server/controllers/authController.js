const User = require('../models/User')
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
            expiresIn: 360000
        }, (error, token)=>{
            if(error) throw error
            res.json({token})
        })

    } catch (error) {
        console.log(error);
    }

}

//get authenficated user
exports.authentificatedUser = async (req,res) => {
        try {
           const user = await User.findById(req.user.id).select('-password') 
           res.json({user})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'There was an error'})
        }
}