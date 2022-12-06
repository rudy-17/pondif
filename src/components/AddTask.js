import { useState } from "react"

const AddTask = ({onAdd}) => {


    const [text,setText]=useState("")
    const [day,setDay]=useState("")
    const [reminder,setRemidner]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){alert("Please add a task")}
        else{ onAdd({text,day,reminder})}
       
        setText("")
        setDay("")
        setRemidner(false)
    }
  return (
    
    <form className='add-formd' onSubmit={onSubmit}>
        <div className='form-controll'>
        <label>Name of the place</label>
            <input type="text" placeholder='Name of the place' value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-controll'>
            <label>Which day</label>
            <input type="text" placeholder='add day and time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        {/* <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type="checkbox" checked={reminder}value={reminder} onChange={(e)=>setRemidner(e.currentTarget.checked)}></input>
        </div> */}
        <input type="submit" value="save task"  className='btn btn-block'></input>
    </form>
  )
}

export default AddTask
