require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const address = require('../models').address;
const handleErr=require('../services/handler');

const addAddress=async (req,res)=>{
    let [err,addresses]=await to(address.bulkCreate([
        {studentId:1,address:'tvl',countryId:2},
        {studentId:2,address:'mdu',countryId:1},
        {studentId:3,address:'mdu',countryId:1},
        {studentId:4,address:'che',countryId:1},
        {studentId:5,address:'mdu',countryId:1}
    ]));
    handleErr(err,addAddress,res);
}

module.exports.addAddress=addAddress;