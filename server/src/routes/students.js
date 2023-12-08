const {Router} = require('express')
const router = Router()
const db = require('../config/db')
const {validateToken} = require('../../teacherJWTauth')


router.post('/add-student', async(req,res)=>{
    const {firstName,middleName,lastName,sgender,semail,sphoneNumber,saddress,student_classdivision,student_class} = req.body   
     const sqlQuery = `INSERT INTO student(firstName,middleName,lastName,sgender,semail,sphoneNumber,saddress,student_classdivision,student_class)
    VALUES(?,?,?,?,?,?,?,?,?)`
    const studentInfo = [firstName,middleName,lastName,sgender,semail,sphoneNumber,saddress,student_classdivision,student_class]
    try {
        await db.query(sqlQuery, studentInfo)
        res.json({success:"Student added succesfully"})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})


router.get('/students',validateToken, async(req,res)=>{
    const teacherid = req.data
    const sqlQuery = `SELECT * FROM student
    INNER JOIN class ON student.student_class = class.class_id`
    try {
       const [students] =  await db.query(sqlQuery)
        res.json(students)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})

module.exports= router