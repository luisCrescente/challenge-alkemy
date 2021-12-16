const db = require("../../database/models");
const path = require("path");
const {
    Op
} = require("sequelize");

const controllerType = {

    conection: (req, res) => {

        const sqlselect = "SELECT * FROM types"
        const connection = mysql.createConnection(credentials)
        connection.query(sqlselect, (error, result) => {

            console.log(result);

            if (error) {
                throw error
            } else {
                res.status(200).send(result)
            }
        })
        connection.end()
    },

    detail: (req, res) => {
        db.Type
            .findAll({
                order: [
                    ['id', 'ASC']
                ]
            }).then(types => {
                let variableTypes = types.map(type => {
                    return type.dataValues;
                })
                return res.status(200).json({
                    total: variableTypes.length,
                    data: variableTypes,
                    status: 200
                })
            }).catch(error => console.log(error));

    }

}

module.exports = controllerType;