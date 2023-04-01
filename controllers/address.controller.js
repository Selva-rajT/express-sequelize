require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const address = require('../models').address;
const student=require('../models').student;
const country=require('../models').country;
const handleErr=require('../services/handler');

const addAddress=async (req,res)=>{
    // let [err,addresses]=await to(address.create(
    //     {
    //         studentId:req.body.studentId,
    //         address:req.body.address,
    //         countryId:req.body.countryId
    //     }
    // ));
    let [err,addresses]=await to(address.bulkCreate(req.body));
    handleErr(err,addresses,res);
}

module.exports.addAddress=addAddress;


const getAddress=async (req,res)=>{
    let [err,addresses]=await to(address.findAll({
        include:[
            {
                model:student,
                attributes:['firstName','lastName']
            },
            {
                model:country,
                attributes:['name'] 
            }
        ]
    }));
    handleErr(err,addresses,res);
}

module.exports.getAddress=getAddress;
