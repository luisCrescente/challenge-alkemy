const db = require("../../database/models");
const path = require("path");
const { Op } = require("sequelize");

const controllerType ={

    detail: (req,res)=>{
        db.Type
            .findAll({
                order: [['id','ASC']]
            }).then(types =>{
                let variableTypes = types.map(type =>{
                    return type.dataValues;
                })
                    return res.status(200).json({
                        total: variableTypes.length,
                        data: variableTypes,
                        status:200
                    })
            }).catch(error => console.log(error));

    }

}

module.exports = controllerType;