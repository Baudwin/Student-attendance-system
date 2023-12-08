import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
    const navigate  = useNavigate()
    const [userInfo, setUserInfo] = useState({
       email:"" ,
       password: ""
    })
    axios.defaults.withCredentials = true


    const handleChange = (event)=>{
        const {name,value} = event.target
        setUserInfo( {...userInfo, [name]:value} )
    }

    const handleClick = (event) =>{
        axios.post('http://localhost:2500/teacher-login', userInfo)
        .then(response=>{
            // console.log(response.data.token);
            navigate("/attendance")
        })
        .catch(err=>{
            console.log(err);
        })

        setUserInfo({email:"",password:""})
        event.preventDefault()
    }


  return (
    <div>
        {/* <form action="">
            <input name='email' onChange={handleChange} placeholder='email' value={userInfo.email} type="text" />
            <input name='password' onChange={handleChange} placeholder='password' value={userInfo.password} type="text" />
            <button onClick={handleClick} type="submit">Login</button>
        </form> */}


        <main className="form-signin w-100 m-auto">
    <form action="" method="" >
      <h1 style={{color: "antiquewhite font-weight: bold"}}  className="h3 mb-3 fw-normal"> Login</h1>
      <span> </span>
  
      <div className="form-floating">
            <input type="email" onChange={handleChange}  autoComplete="off" required value={userInfo.email}  name="email" className="form-control" placeholder="email"/>
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" name="password" required onChange={handleChange}  className="form-control" value={userInfo.password} placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button onClick={handleClick} className="btn btn-primary w-100 py-2" type="submit">Login</button>

    </form>
    <br/>
    <div className="container">
        <span> DONT HAVE AN ACCOUNT? </span>
      <a style={{color: "rgb(165, 42, 42) font-weight: bold"}} href="/signup">SIGNUP</a>
      </div>
  </main>

    </div>
  )
}

export default Login