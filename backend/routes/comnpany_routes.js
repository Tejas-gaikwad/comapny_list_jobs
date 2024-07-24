const express = require('express');
const router = express.Router();
const { addCompany, getAllCompanies } = require('../controllers/company_controller');


router.post('/addCompany',  addCompany);
router.get('/getAllCompanies',  getAllCompanies);

module.exports = router;