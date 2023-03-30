module.exports = (sequelize,DataTypes) => {
    const Model = sequelize.define('employee',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:DataTypes.STRING,
        deptName : DataTypes.STRING //dept_name
    },{
        // freezeTableName: true
        // tableName: 'employeeDetails'
        timestamps : true,
        paronoid : true,
        underscored : false,
    });
    return Model;
}