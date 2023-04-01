require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const student = require('../models').student;

const handleErr=require('../services/handler');
const Department=require('../models').Department;

const addStudent = async function(req,res) {
    let[err,students] = await to(student.create(
        {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            gender:req.body.gender,
            DepartmentId:req.body.DepartmentId
        }
    ));
    handleErr(err,students,res);  
}
module.exports.addStudent=addStudent;


const getStudent=async(req,res)=>{
    let [err,students]=await to(student.findAll({
        include:{
            model:Department,
            attributes: ['deptName']
        }
    }));
    handleErr(err,students,res);
}
module.exports.getStudent=getStudent;


const insertUsingReq=async (req,res)=>{
    let dept_Name=req.body.deptName;
    let [err,deptId]=await to(Department.findOne({
        attributes:['id'],
        where:{deptName:dept_Name}
    }));
    if(err) return ReE(res,err,422);
    let Department_Id=deptId.id;
    let [errr,students]=await to(student.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            gender:req.body.gender,
            DepartmentId:Department_Id
    }));
    handleErr(errr,students,res);
}
module.exports.insertUsingReq=insertUsingReq;