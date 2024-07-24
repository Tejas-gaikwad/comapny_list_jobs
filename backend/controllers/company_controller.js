
const CompanyModel = require('../models/company_schema');
const mongoose = require('mongoose')

const addCompany = async (req, res) => {
    try{
        const {name , careerPageLink } = req.body;
        if(!name || !careerPageLink) {
            return res.status(400),json({
                "message" : "Please provide all information",
            })
        }
        const companyData = new CompanyModel({name, careerPageLink});
        const savedCompany = await companyData.save();
        res.status(200).json({
            "message" : "Company Data saved successfully",
            "data" : savedCompany
        });
    } catch(err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companies = await CompanyModel.find();
        res.status(200).json({
            "message" : "Data Retrieved Successfully",
            "data" : companies,
        });
    } catch(err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

module.exports = {
    addCompany, 
    getAllCompanies,
  };