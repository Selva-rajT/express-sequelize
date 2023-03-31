
module.exports=(sequelize,DataTypes)=>{
    var Model=sequelize.define('country',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps : true,
        paronoid : true,
        underscored : false
    });
    Model.associate=function(models){
        this.address=this.hasMany(models.address);
    }
    return Model;
}

/* 
id
	primary key
	Auto increment
	Required
name
	Required.Should not allow null value.

createdAt
modifiedAt
*/