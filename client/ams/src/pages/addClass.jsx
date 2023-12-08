import React, { useState } from 'react'
import axios from 'axios'

function AddClass() {
const [className, setClassName] = useState("")
const [successMsg, setSuccesMsg] = useState("")
const [allClasses, setClasses] = useState()

const handleChange= (event)=>{
const {name, value} = event.target
setClassName(value)
}

const handleClick = ()=>{
axios.post("http://localhost:2500/add-class", {className})
.then(response=>{
    setSuccesMsg(response.data.success)
}).catch(err=>{
    setSuccesMsg("An error occured try again")
})

setClassName("")
    }

  return (
    <div>
        <h2 style={{color:"green"}}>{successMsg}</h2>
<h1>Add a new Class</h1>
<input onChange={handleChange} type="text" value={className} placeholder='Class Title' name="className" id="" />
<button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddClass