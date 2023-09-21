import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [task,setTask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:5000/api/save',{toDo:task})
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
   
    }
  return (
    <div>
     <div className="input_holder">
          <input placeholder="Add a ToDo..." 
          onChange={(e)=>setTask(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
          </div>
    </div>
  )
}

export default Create
