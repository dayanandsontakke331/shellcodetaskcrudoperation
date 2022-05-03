const mongoose = require('mongoose')
const { mongo } = require('../db')

const studentsSchema = new mongoose.Schema({
    studentName : {
        type : String,
        unique : true
    },
    studentAddress : {
        type : String
    },
    contactNumber : {
        type : Number,
        unique : true
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
        unique : true,

    }


})

module.exports = mongoose.model("students", studentsSchema)