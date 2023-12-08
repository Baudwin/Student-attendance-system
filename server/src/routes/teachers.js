const {Router} = require('express')
const router = Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')
const saltRounds = 10
const {createToken} = require('../../teacherJWTauth')


router.post('/teacher-login', async(req,res)=>{
    const {email, password} = req.body
    const sqlQuery = `SELECT * FROM teacher
    WHERE email = ?`
    try {
        const [user] = await db.query(sqlQuery,email)
        if (user) {

            bcrypt.compare(password, user[0].password, (err, result)=>{
                if (result) {
                
                    const accessToken = createToken(user[0])
                    res.cookie("token", accessToken, {httpOnly:true})   
                    res.json({token:accessToken, userData:user})

                }else{
                    res.status(404).json({err:"Incorrect password"})
                }
               
            })

        }else if(!user){
            res.status(404).json({err:"user with email not found"})
        }
        
    } catch (err) {
        res.status(404).json({err:"user not found"})
    }
})




router.post('/add-teacher', async(req,res)=>{
    const {fName,mName,lName,gender,email,phoneNumber,address,password,subject,clas} = req.body   
     const sqlQuery = `INSERT INTO teacher(fName,mName,lName,gender,email,phoneNumber,address,password,subject,class)
    VALUES(?,?,?,?,?,?,?,?,?,?)`
    const teacherInfo = [fName,mName,lName,gender,email,phoneNumber,address,password,subject,clas]
    try {
        await db.query(sqlQuery, teacherInfo)
        res.json({success:"Teacher added succesfully"})
    } catch (err) {
        res.status(400).json({err:"An error occured try again"})
    }
})


router.get('/teachers', async(req,res)=>{
    const sqlQuery = `SELECT * FROM teacher`
    try {
       const [teachers] =  await db.query(sqlQuery)
        res.json(teachers)
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})

module.exports= router