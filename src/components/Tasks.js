import { useState } from "react"
import Task from "./Task"

const Tasks = ({tasks,ondelete,onToggle}) => {
    console.log(tasks)
  return (
    <>
    {tasks.map((task)=>
    
    (<Task key ={task._id} task={task} onDelete={ondelete} ontoggle={onToggle} />))}
    </>
  )
}

export default Tasks
