module.exports =(sequelize, dataTypes) =>{

    let alias = "Type";
    let cols = {
        id: {
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoincrement :true
            },
        name:{
            type:dataTypes.STRING(45)
        }
    };

    let config = {
        tableName:"types",
        timestamps:false
    };

    const Types =sequelize.define (alias,cols,config);

    Types.associate= function (models){

        Types.hasMany(models.Operation,{
            as:'operations',
            foreignKey:"id_type"
        })
    }
    return Types
}