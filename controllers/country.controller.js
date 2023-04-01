require('../config/config');
const {fn } = require('sequelize');
const {to} = require('../global_functions');
const country = require('../models').country;
const handleErr=require('../services/handler');

const addCountry=async (req,res)=>{
    let [err,countries]=await to(country.create(
        {name:req.body.name}
    ));
    handleErr(err,countries,res);
}
module.exports.addCountry=addCountry;