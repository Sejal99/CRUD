import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
const Home = () => {
    const [todos,setTodos]=useState([])
    console.log(todos);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
       <h1 style={{textAlign:"center"}}>Add Todo</h1>
      <Create/>

      {
        todos.length===0 ? 
        <div> <h2 style={{textAlign:"center"}} >No Record</h2></div>
        :
        todos.map(todo=>(
            <div>
                {todo.toDo}
                </div>

        ))
      }
    </div>
  )
}

export default Home
