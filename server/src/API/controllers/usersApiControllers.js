const db = require("../../database/models");
const path = require("path");
const {op} = require("sequelize");


const controllerUsers = {

    list:(req,res) =>{
        db.User.findAll()
            .then(users =>{
            res.json(users);
            })
            .catch(error =>{
                console.log(error)
            });
    }

}

module.exports = controllerUsers;