const sequelize = require ('sequelize');
const database  =  require ('./db');

const produto = database.define('peoduto',{
 
    id:{
        type:sequelize. INTEGER,
        autoIncrement:true,
        allownull:false,
        primarykey:true


    },
    nome:{
        type:sequelize.STRING,
        aloownull:false 
    }
    preço:{sequelize.DECIMAL,
        descriçao:sequelize.STRING
    }


})

module.exports = Produto;