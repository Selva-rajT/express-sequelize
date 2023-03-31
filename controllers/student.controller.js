require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const student = require('../models').student;
const handleErr=require('../services/handler')

const addStudent = async function(req,res) {
    let[err,students] = await to(student.bulkCreate(
        [
            {firstName:'selva',lastName:'raj',gender:'male',DepartmentId:1},
            {firstName:'selva',lastName:'kumar',gender:'male',DepartmentId:2},
            {firstName:'sharn',lastName:'simon',gender:'male',DepartmentId:2},
            {firstName:'selva',lastName:'prabha',gender:'female',DepartmentId:1},
            {firstName:'selva',lastName:'ragavan',gender:'male',DepartmentId:1}
        ]
    ));
    handleErr(err,students,res);  
}
module.exports.addStudent=addStudent;