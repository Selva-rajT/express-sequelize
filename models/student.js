module.exports = (sequelize,DataTypes) => {
    const Model = sequelize.define('student',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        },
        DepartmentId:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            default:true
        } 
    },{
        timestamps : true,
        paronoid : true,
        underscored : false
    });
    Model.associate = function(models){
        this.DepartmentId= this.belongsTo(models.Department);
        this.address=this.hasMany(models.address);
    };
    return Model;
}

/* 
id
	primary key
	Auto increment
	Required
firstName
	Required.Should not allow null value.
lastName
	Required.Should not allow null value.
gender
	Required.Should not allow null value.
departmentId
	Refer to the department table
isActive 
	defaultValue---> true
createdAt
modifiedAt

*/