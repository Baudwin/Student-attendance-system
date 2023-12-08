import React, { useState } from 'react'
import axios from 'axios'

function AddTeacher(props) {
    const {classes,subjects} = props
    const [teacherInfo , setTeacherInfo] = useState({
        fName: "",
        mName: "",
        lName : "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        subject:"",
        clas:"" 
    })


const handleChange = (event)=>{
    const {name,value} = event.target
    setTeacherInfo({...teacherInfo, [name]:value})
    }

  //  ADD TEACHER 
    const handleClick = ()=>{
       axios.post("http://localhost:2500/add-teacher", teacherInfo)
       .then(response=>{
console.log(response);
       })
        .catch(err=>{
console.log(err);
       }) 
    }


  return (
    <div>
    <input onChange={handleChange} type="text" placeholder='fName' name="fName" id="" />
    <input onChange={handleChange} type="text" placeholder='mName' name="mName" id="" />
    <input onChange={handleChange} type="text" placeholder='lName' name="lName" id="" />

    <label htmlFor="">GENDER </label>
    <select name="gender" onChange={handleChange} id="">
    <option >Select gender</option> 
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    </select>
    <input onChange={handleChange} type="text" placeholder='phoneNumber' name="phoneNumber" id="" />
    <input onChange={handleChange} type="text" placeholder='email' name="email" id="" />
    <input onChange={handleChange} type="text" placeholder='address' name="address" id="" />
    <input onChange={handleChange} type="text" placeholder='password' name="password" id="" />

    <label htmlFor="">SUBJECT </label>
    
    <select name="subject" onChange={handleChange} id=""> 
    <option value="">Select Subject</option>
 {   subjects.map(s=>{
      return <option key = {s.subject_id} value={s.subject_id}>{s.subject_name}</option>;
    })} 

 </select> <br/>
 <hr />
    <label htmlFor="">CLASS  </label>
    <select name="clas" onChange={handleChange} id=""> 
    <option value="">Select Class</option>
 { classes.map(c=>{
      return <option key = {c.class_id} value={c.class_id}>{c.class_name}</option>;
    })}
 </select>
    <button onClick={handleClick}>Add Teacher</button>
    </div>
  )
}

export default AddTeacher