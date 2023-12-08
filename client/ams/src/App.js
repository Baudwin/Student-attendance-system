import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login';
import AdminDashboard from './pages/adminDashboard';
import AddClass from './pages/addClass';
import AddTeacher from './pages/addTeacher';
import AddSubject from './pages/addSubject';
import AddClassDivision from './pages/addClassDivision';
import AddStudent from './pages/addStudent';
import Navbar from './components/Navbar';
import { Attendance } from './pages/attendance';


function App() {
const [year, setYear] = useState("")
const [classes, setClasses] = useState([])
const [subjects, setSubjects] = useState([])
const [teachers, setTeachers] = useState([])
const [divisions, setDivisions] = useState([])
const [students, setStudents] = useState([])

axios.defaults.withCredentials = true

useEffect(()=>{
axios.get('http://localhost:2500/academic-year')
.then((response)=>{
  const data = response.data
  setYear(data[0])
})
.catch(err=>{
  console.log(err);
})
  }, [])


  useEffect(()=>{
    axios.get('http://localhost:2500/classes')
    .then(response=>{
        setClasses(response.data)
    }).catch(err=>{
        console.log(err);
    })
},[]) 


useEffect(()=>{
  axios.get('http://localhost:2500/subjects')
  .then(response=>{
      setSubjects(response.data)
  }).catch(err=>{
      console.log(err);
  })
},[])  

useEffect(()=>{
  axios.get('http://localhost:2500/teachers')
  .then(response=>{
      setTeachers(response.data)
  }).catch(err=>{
      console.log(err);
  })
},[])  

useEffect(()=>{
  axios.get('http://localhost:2500/class-divisions')
  .then(response=>{
      setDivisions(response.data)
  }).catch(err=>{
      console.log(err);
  })
},[]) 

axios.defaults.withCredentials = true
useEffect(()=>{
  axios.get('http://localhost:2500/students')
  .then(response=>{
      setStudents(response.data)
      // console.log(response.data);
  }).catch(err=>{
      console.log(err);
  })
},[]) 



  return (
    <div className="App">
     {/* <Navbar/> */}
  
    <nav>
      <ul>
      <Link className='Link' to={"/"}>Home</Link> <br/>
      <Link className='Link' to={"add-class"}>Add Class</Link> <br/>
      <Link className='Link' to={"admin-dashboard"}>Admin Dashboard</Link> <br/>
      <Link className='Link' to={"add-teacher"}>Add Teacher</Link> <br/>
      <Link className='Link' to={"add-subject"}>Add Subject</Link><br/>
      <Link className='Link' to={"add-class-division"}>Add Class Division</Link> <br/>
      <Link className='Link' to={"add-student"}>Add Student</Link> <br/>
      <Link className='Link' to={"attendance"}>Take Attendance</Link>
  
      </ul>
    </nav>
    
        <Routes>
          <Route path='/' element={<Login/>} > </Route>
          <Route path='admin-dashboard' element={<AdminDashboard/>} > </Route>
          <Route path='add-class' element={<AddClass/>} > </Route>
          <Route path='add-teacher' element={<AddTeacher classes = {classes}  subjects = {subjects} />} > </Route>
          <Route path='add-subject' element={<AddSubject />} > </Route>
          <Route path='add-class-division' element={<AddClassDivision classes = {classes} teachers = {teachers}  />} > </Route>
          <Route path='add-student' element={<AddStudent classes = {classes} divisions = {divisions} />} > </Route>
          <Route path='attendance' element={<Attendance students = {students} />} > </Route>
        </Routes>
   {/* <center><h1>ACADEMIC YEAR </h1>
   <h4>{year.accademic_year}</h4>
    </center> */}
    </div>
  );
}

export default App;
