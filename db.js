const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/student_database')


module.exports = mongoose;