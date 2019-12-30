var user = require('models/UserModel.js')

user.findOne({
    where:{username:requestAnimationFrame.body.username}
})
function registerUser(req,res,next){
user.create({
    username:req.body.username,
    password:req.body.password,
    address:req.body.address


})
}
module.exports = {
    registerUser
}

