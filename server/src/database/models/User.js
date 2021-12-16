module.exports=(sequelize,dataTypes)=>{
    let alias= "User"
    let cols ={
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,

        },

        email: {
            type: dataTypes.STRING,
            unique: true
        },
        password:{
            type:dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING,
            
        },

    }

    let config={
        tableName:"users",
        timestamps:false
    };

    const User = sequelize.define (alias,cols,config);

    User.associate = function(models){

        User.hasMany(models.Operation,{
            as:'operations',
            foreignKey: "id_user"
        })
    }
    return User;
}