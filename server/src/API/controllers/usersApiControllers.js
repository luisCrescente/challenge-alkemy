const db = require('../../database/models');
const path =require('path');
const bcrypt = require('bcryptjs');
//const { Op } = require("sequelize");



const controllerUsers ={
    
    
    show: (req,res)=>{
        db.User.findAll()
       .then(
           user=>{
               return  res.status(200).json({
                   detial:`http://localhost:3003/users/list`,
                   data: user,
                   status: 200,
                })
            }
            
          
       )


    },
    showApi: (req, res) =>{
        db.User
            .findByPk(req.params.id)
            .then(user=>{
                
            return  res.status(200).json({
                detial:`http://localhost:3003/users/list/${req.params.id}`,
                data: user,
                status: 200
            })
        })
        .catch(error=>console.log(error))

    },

    create:(req,res)=>{
        db.User
            .create({
                email:req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                name:req.body.name
            })
            .then(user=>{
                    return res.status(200).json({
                        data: user,
                        status: 200,
                        created: 'ok'
                    })
                })
                .catch(error=>console.log(error))
    },

    login:(req,res)=>{
        db.User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(userTologin=>{
            if(userTologin){
                let passwordUser =bcrypt.compareSync(req.body.password, userToLogin.password);
                if (passwordUser){
                    req.session.userLogged = userToLogin
                }
                console.log('logeado')
            }
        }) .catch(error=>console.log(error))

    },

    logout: (req,res)=>{
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/login')
    }
}

module.exports =controllerUsers