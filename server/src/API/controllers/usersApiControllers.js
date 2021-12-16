const db = require('../../database/models');
const path = require('path');
//const { Op } = require("sequelize");



const controllerUsers = {

    conection: (req, res) => {
        const sqlselect = "SELECT * FROM users"
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
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name
        console.log(email);
        console.log(password);
        console.log(name);
        const sqlInsert = `INSERT INTO users (email,password,name) VALUES (?,?,?)`
        const connection = mysql.createConnection(credentials)
        connection.query(sqlInsert, [email, password, name], (error, result) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(200).send(result)
            }
        })
        connection.end()
    },

    login: (req, res) => {
        const {
            email,
            password
        } = req.body
        const values = [email, password]
        const connection = mysql.createConnection(credentials)
        connection.query("SELECT * FROM users WHERE email = ? AND password = ?",
            values, (err, result) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    if (result.length > 0) {
                        res.status(200).send({
                            "id": result[0].id,
                            "email": result[0].email,
                            "password": result[0].password
                        })
                    } else {
                        res.status(400).send("usuario no existe")
                    }
                }
            })
        connection.end()
    },

    show: (req, res) => {
        db.User.findAll()
            .then(
                user => {
                    return res.status(200).json({
                        detial: `http://localhost:3003/users/list`,
                        data: user,
                        status: 200,
                    })
                }


            )


    },
    showApi: (req, res) => {
        db.User
            .findByPk(req.params.id)
            .then(user => {

                return res.status(200).json({
                    detial: `http://localhost:3003/users/list/${req.params.id}`,
                    data: user,
                    status: 200
                })
            })
            .catch(error => console.log(error))

    },

}

module.exports = controllerUsers