const { json } = require('body-parser')
const studentModel = require('../models/students')

// to new student entry or save student
exports.createStudent = async (req, res)=>{
    try {

        const newStudent = new studentModel(req.body)

        await newStudent.save()

        res.send(newStudent)


    } catch (err) {

        console.log(err)
        
    }
}


// to get all students
exports.getStudents = async (req, res)=>{
    try {

        const getAllStds = await studentModel.find()

        // console.log(json(getAllStds))

        res.status(200).json(getAllStds)

    } catch (err) {
        
        console.log(err)
    }
}

//get specific student data
exports.specificStudentData =async (req,res)=>{
    try {
        const student=await studentModel.find({_id : req.params.studentId})
        res.status(200).json(student)
        
    } catch (err) {
        res.status(500).json({error:err})
    }
}

// to update the student information

exports.updateStudent = async (req, res)=>{

    studentModel.findOneAndUpdate({_id : req.params.studentId},

         req.body,  // request to the body to get an id

         {new : true}, // we accept updated data 
        
         (err, data)=>{

        if(err){

           res.status(500).json({"error" : err})

        }else{

            res.status(200).json(data)

        }
    })
}


// to delete specified student
exports.deleteStudent = async (req, res)=>{

    studentModel.findOneAndDelete({_id : req.params.studentId},
 
        (err, data)=>{

            if(err){

               res.status(500).json({"error" : err})

            }else{

                res.status(200).json(data)

            }
        }
        )
}

