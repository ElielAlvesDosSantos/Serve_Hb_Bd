const { DataTypes } = require('sequelize')
const DB = require('../DB/conn')

const Usuario = DB.define('usuarios',{
   nome: {
    type: DataTypes.STRING(30),
   },
   idade: {
    type: DataTypes.INTEGER, 
},
},{
    createdAt: false,
    updatedAt: false
})

// Usuario.sync({force:true})

module.exports = Usuario 