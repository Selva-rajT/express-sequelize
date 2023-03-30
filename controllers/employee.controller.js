require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const employee = require('../models').employee;
const handleErr=require('../services/handler')

// ***********to insert a record to the table**********
const addEmployee = async function(req,res) {
    let[err,employees] = await to(employee.create({
        name:'selva',
        deptName:'fullstack'
    }));
    // console.log('employee data',employees);
    // if(err) return ReE(res,err,422);
    // if(employees) return ReS(res,employees,200);
    handleErr(err,employees,res);  //here the above 3 line of code is repeated for all functions so it ids defined in sie  the service folder ->handler file
}
module.exports.addEmployee = addEmployee;

// ***************get the records from the table************
const getEmployee=async function(req,res){
    let [err,employees]=[null,null];  //initializeing the variable for future use
    if(req.query.id){                 //runs when the http call comes with a query with id as a value
        [err,employees] = await to(employee.findAll(
            {
                where:{
                    id:req.query.id
                }
            }
        ));
    }
    else{                             //runs on a http get call to retrive the table
        [err,employees] = await to(employee.findAll());
    }
    // console.log('employee data',employees);
    // if(err) return ReE(res,err,422);
    // if(employees) return ReS(res,employees,200);
    handleErr(err,employees,res);
}
module.exports.getEmployee = getEmployee;

// ***************get the row using the parameter******************
const getEmployeeUsingParam=async function(req,res){
    let[err,employees] =[null,null];
    if(!isNaN(req.params.parameter)){
     [err,employees]=await to(employee.findAll({
        where:{
            id:req.params.parameter  //id is fetched as a parameter in the http call
            }
        }
    ));
    }
    else{
        [err,employees]=await to(employee.findOne({
            where:{
                name:req.params.parameter  //id is fetched as a parameter in the http call
                }
            }
        ));
    }

    handleErr(err,employees,res);
}

module.exports.getEmployeeUsingParam = getEmployeeUsingParam;

// **************update the data of table**************************
const updateRow=async (req,res)=>{
    var id_=6;
    let[err,employees]=await to(employee.update({name:"sharn"},{
        where:{id:id_}
    }));
    handleErr(err,employees,res);
}
module.exports.updateRow=updateRow;

// *************count all records in the table********************

const countAllEmployees=async (req,res)=>{
    let [err,employees]=await to(employee.findAndCountAll());
    handleErr(err,employees,res);
}
module.exports.countAllEmployees=countAllEmployees;

  
