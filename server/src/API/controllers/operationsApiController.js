const db = require("../../database/models");
const path = require("path");
const {op} = require("sequelize");

const operations ={
    detailApi:(req,res)=>{    
        db.Operation
        .findAll({include:[{association:'type'},{association:'users'}]
    })
        .then(operations =>{
            let ingresos = operations.filter(operation =>{
                return operation.dataValues.type_id = 1;
            });

            let egresos = operations.filter(operation =>{
                return operation.dataValues.type_id = 2;
            });

            let variableOperation = operations.map(operation =>{

                delete operation.dataValues.type_id;
                return operation.dataValues;
            })
            return  res.status(200).json({
                countByType: `Ingresos ${ingresos.length}, egresos ${egresos.length}`,
                data: variableOperation,
                status:200
            })
        })
            .catch(error => console.log(error))
    }


}

module.exports = operations;