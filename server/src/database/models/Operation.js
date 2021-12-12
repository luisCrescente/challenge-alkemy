
module.exports = (sequelize,dataTypes)=>{
        let alias="Operation";
        let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoincrement :true
        },
        description:{
            type:dataTypes.STRING
        },
        amount:{
            type:dataTypes.INTEGER(11)
        },
        id_type:{
            type:dataTypes.INTEGER(11)
        },
        id_user:{
            type:dataTypes.INTEGER(11)
        }

}
let config = {
    tableName:"operations",
    timestamps:false
};

const Operation = sequelize.define(alias,cols,config);

Operation.associate = function (models){

    Operation.belongsTo(models.Type,{
        as:'types',
        foreignKey:"id_type"
    })

    Operation.belongsTo(models.User,{
        as:'users',
        foreignKey:"id_user",
        
    })
}
    return Operation
}