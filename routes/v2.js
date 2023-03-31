var express = require('express');
var router = express.Router();


const studentController=require('../controllers/student.controller');
const departmentController=require('../controllers/depatrment.controller');
const addressController=require('../controllers/address.controller');
const countryController=require('../controllers/country.controller');


router.post('/addStudent',studentController.addStudent);
router.post('/addDepartment',departmentController.addDepartment);
router.post('/addAddress',addressController.addAddress);
router.post('/addCountry',countryController.addCountry);


module.exports=router;