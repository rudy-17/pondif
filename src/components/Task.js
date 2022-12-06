import React from 'react'
import {FaTimes} from "react-icons/fa"

const Task = ({task,onDelete,ontoggle }) => {
  return (
    <div className={`task ${task.reminder?"reminder":""}`}  onDoubleClick={()=>ontoggle(task.id)}>
        <a className='btn btn-primary' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">{task.text}</a>
        <a><FaTimes style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(task._id)}/></a>
       
        <p>
  
  
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <p>{task.day}</p>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Jana He
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Nahi Ho Payegha
  </label>
</div>
  </div>
</div>
      
    </div>
  )
}

export default Task
