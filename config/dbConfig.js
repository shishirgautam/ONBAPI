var Sequelize = require('sequelize')
var sequelize = new Sequelize('noticeboard','root','rootpasswordgiven',{
host:'localhost',
dialect:'mysql'
});



module.exports = {
    Sequelize, sequelize
}