
module.exports=(sequelize,DataTypes)=>{
    var Model=sequelize.define('address',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        studentId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        countryId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        timestamps : true,
        paronoid : true,
        underscored : false 
    });
    Model.associate=function(models){
        // console.log('check',models);
        this.studentId=this.belongsTo(models.student);
        this.countryId=this.belongsTo(models.country);
    }
    return Model;
}

/*
id
	primary key
	Auto increment
	Required
sttudentId
	Refer student table
address
	Required.Should not allow null value.
countryId
	Refer Country model

createdAt
modifiedAt */