const db = require("../../database/models");
const path = require("path");
const {op} = require("sequelize");

const operations ={
    show:(req,res)=>{    
        db.Operation
        .findAll({include:[{association:'types'},{association:'users'}]
    })
        .then(operations =>{
        
            return  res.status(200).json({
                data: operations,
                status:200
            })
        })
            .catch(error => console.log(error))
    },

    create: (req,res)=>{
        db.Operation.create(
            {
                
                description:req.body.descripcion,
                amount: req.body.monto,
                date:req.body.date,
                id_type:req.body.tipo,
                id_user:2
                
        
                
            },{include:[{association:'types'},{association:'users'}]
        })
        .then(operations =>{
    
            return  res.send(operations)
        })
            .catch(e=>console.log(e))
        
    },

    destroy: function(req,res){
        db.Operation.destroy({   
            include:[{association:'types'},{association:'users'}],
            where:{id : req.params.id}  
        })
        .then(()=>
            res.send("elimando")
            )
            .catch(error=>console.log(error))
    },


}

module.exports = operations;
