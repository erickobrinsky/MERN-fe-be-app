const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    //read header token
    const token = req.header('x-auth-token')
    console.log(token);

    //check if not token
    if(!token){
        return res.status(401).json({msg: 'No token, permit not valid'})
    } 

    //valid token
    try {
        const cifrado = jwt.verify(token, process.env.SECRET)
        req.user = cifrado.user
        next()
    } catch (error) {
        res.status(401).json({msg: 'Invalid token'})
    }

}