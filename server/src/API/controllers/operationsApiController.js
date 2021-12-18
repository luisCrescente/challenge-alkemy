const db = require("../../database/models");
const path = require("path");
const {
    op
} = require("sequelize");

const operations = {

    conection: (req, res) => {
        const sqlselect = "SELECT * FROM operations"
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

    insert: (req, res) => {
        const description= req.body.description;
        const type=req.body.type;
        const amount=req.body.amount
        const date=req.body.date
        
        console.log(description);
        console.log(type);
        console.log(amount);
        console.log(date);
    
        const sqlInsert= `INSERT INTO operations (description,amount,date,id_type,id_user) VALUES (?,?,?,?,?)`
        const connection = mysql.createConnection(credentials)
        connection.query(sqlInsert,[description,amount,date,"1",type], (error, result) => {
            if (error) {
            res.status(500).send(error)
        } else {
                res.status(200).send(result)
            }
        })
        connection.end()
    },

    detailApi: (req, res) => {
        db.Operation
            .findAll({
                include: [{
                    association: 'types'
                }, {
                    association: 'users'
                }]
            })
            .then(operations => {

                return res.status(200).json({
                    data: operations,
                    status: 200
                })
            })
            .catch(error => console.log(error))
    }


}

module.exports = operations;