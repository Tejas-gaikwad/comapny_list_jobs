const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    careerPageLink : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model('Company', CompanySchema);