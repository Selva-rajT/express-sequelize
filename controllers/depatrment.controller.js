require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const department = require('../models').Department;
const handleErr=require('../services/handler');

const addDepartment=async (req,res)=>{
    let [err,departments]=await to(department.create(
        {
            deptName:req.body.deptName
        }
    ));
    handleErr(err,departments,res);
}
module.exports.addDepartment=addDepartment;