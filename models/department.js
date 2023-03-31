

module.exports=(sequelize,DataTypes)=>{
    var Model=sequelize.define('Department',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        deptName:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
        {
            timestamps : true,
            underscored : false
        }
    );
    Model.associate = function(models){
        this.student = this.hasMany(models.student);
    };
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