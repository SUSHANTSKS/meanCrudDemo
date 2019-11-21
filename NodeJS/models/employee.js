const mongoose = require('mongoose');
// scema of Employee model means there type and value

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number },
    mobile: {type: Number},
});

module.exports = { Employee };