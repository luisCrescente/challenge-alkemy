const db = require("../database/models");
const path = require("path");
const { op } = require("sequelize");

const operations = {
    table: (req, res) => {

        db.Operation.findAll({
                include: [
                {association: 'types'},
                { association: 'users'}]
            })
            .then(operations => {

                res.render('table', {operations, user:req.session.userLogged})
            }).catch(error => console.log(error));
    },

    create: (req, res) => {
        let types = db.Type.findAll()
        Promise
            .all([types])
            .then(
                function(responses) {
                    let types = responses[0];
                    return res.render('createOp', { types })
                })
            .catch(error => console.log(error))
    },

    storage: (req, res) => {
        db.Operation.create(

            {
                description: req.body.description,
                amount: req.body.amount,
                date: req.body.date,
                id_type: req.body.types,
                id_user: req.session.userLogged.id
            },

            {
                include: [
                {
                    association: 'types'
                },
                {
                    association: 'users'
                }]
            })
        .then(() => {
            res.redirect("/operation")
        })
        .catch(e => console.log(e))
},


    edit: (req, res) => {

        let operation = db.Operation.findByPk(
            req.params.id)

        Promise
            .all([operation])
            .then(
                function(responses) {
                    let operation = responses[0];
                    return res.render('editTable',{operation})
                })
            .catch(error => console.log(error))
    },

    update: (req, res) => {
        db.Operation.findByPk(
                req.params.id)

            .then(() => {
                db.Operation.update(
                    {
                        description: req.body.description,
                        amount: req.body.amount,
                        date: req.body.date,
                    }, 
                    {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        res.redirect("/operation")
                    }).catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    },

    destroy: (req, res) => {
        db.Operation.destroy({
                include: [
                {
                    association: 'types'
                },
                {
                    association: 'users'
                }],
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/operation')
            }).catch(error => console.log(error))
    }

}

module.exports = operations;