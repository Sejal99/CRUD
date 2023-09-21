import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [task,setTask]=useState()

    const handleAdd=async()=>{
      
    try {
      const res= await axios.post('http://localhost:5000/api/save',{toDo:task})
    } catch (error) {
      console.log(error);
    }
        
   
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
