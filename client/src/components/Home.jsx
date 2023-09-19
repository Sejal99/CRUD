import React, { useState } from 'react'
import Create from './Create'

const Home = () => {
    const [todos,setTodos]=useState([])
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
                {todo}
                </div>

        ))
      }
    </div>
  )
}

export default Home
