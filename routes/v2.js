var express = require('express');
var router = express.Router();


const studentController=require('../controllers/student.controller');
const departmentController=require('../controllers/depatrment.controller');
const addressController=require('../controllers/address.controller');
const countryController=require('../controllers/country.controller');

// ***********to insert values to the tables*************************
router.post('/addStudent',studentController.addStudent);
router.post('/addDepartment',departmentController.addDepartment);
router.post('/addAddress',addressController.addAddress);
router.post('/addCountry',countryController.addCountry);
// ******************************************************************

// ************to get values*****************************************
router.get('/getStudent',studentController.getStudent);
router.get('/getAddress',addressController.getAddress);

router.post('/insertUsingReq',studentController.insertUsingReq);
module.exports=router;