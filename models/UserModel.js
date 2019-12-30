var db = require('../config/dbConfig.js')

var User = db.sequelize.define('Users', {
    //attributes 

    id: {
        type:db.Sequelize.INTEGER ,
        primaryKey: true ,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type:db.Sequelize.TEXT ,
       allowNull: false
    },
    password: {
        type: db.Sequelize.TEXT,
        allowNull:false
    },
    address: {
        type: db.Sequelize.TEXT ,
        allowNull: false

    }
},


{
    freezerTableName: true,
    tableName: 'my_user',
    

})

User.sync({force:false})
.then(function(){

})
.catch(function(){
    console.log(err)
})
module.exports = {
    User
}