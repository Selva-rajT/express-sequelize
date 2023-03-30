var express = require('express');
var router = express.Router();

let employeeController = require('../controllers/employee.controller');

router.post('/addEmployee',employeeController.addEmployee);
router.get('/viewEmployee',employeeController.getEmployee);
router.get('/viewEmployee/:parameter',employeeController.getEmployeeUsingParam);
router.put('/updateEmployee',employeeController.updateRow);
router.get('/countAll',employeeController.countAllEmployees);
module.exports = router;