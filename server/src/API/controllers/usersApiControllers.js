const db = require('../../database/models');
const path = require('path');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');



const controllerUsers = {

    register: (req, res) => {
        res.render("register")
    },


    ProcessRegister: (req, res) => {
        try {
            const validation = validationResult(req);
            if (validation.errors.length > 0) {
                return res.render("register", {
                    errors: validation.mapped(),
                    oldData: req.body,
                });
            };
            db.User.findOne({
                    where: {
                        email: req.body.email,
                    }
                })
                .then((user) => {
                    if (user) {
                        return res.render("register", {
                            errors: {
                                email: {
                                    msg: "email ya esta registrado",
                                },
                            },
                            oldData: req.body,
                        })
                    } else {
                        db.User.create({
                                name: req.body.name,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 10)

                            }).then(() => {
                                res.redirect('/login')
                            })
                            .catch(error => console.log(error))
                    }
                }).catch(error => console.log(error))

        } catch (error) {console.log(error)}
    },

    login: function(req, res) {
        return res.render("login")
    },

    processLogin: (req, res) => {
        db.User.findOne({
                where: {
                    email: req.body.email
                }

            })
            .then(userToLogin => {

                if (userToLogin) {

                    let passwordUser = bcrypt.compareSync(req.body.password, userToLogin.password);
                    if (passwordUser) {
                        delete userToLogin.pass;
                        req.session.userLogged = userToLogin


                        return res.redirect('/operation');
                    } else {

                        return res.render('login', {
                            errors: {
                                password: {
                                    msg: 'La contraseña no coincide',
                                }
                            }

                        })
                    }
                }
            }).catch(error => console.log(error))
    },

    

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/')
    },
}

module.exports = controllerUsers