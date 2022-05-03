const express = require('express')
const studentController = require('../controllers/students')

const router = express.Router()


// to create or save new student data
router.post('/', studentController.createStudent)

// to get all students
router.get('/', studentController.getStudents)

// to get specific student data
router.get('/:studentId', studentController.specificStudentData)

// to update one student
router.put('/:studentId', studentController.updateStudent)

// to delete the user

router.delete('/:studentId', studentController.deleteStudent)

module.exports = router