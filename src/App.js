import Header from "./components/Header"
import Task from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState,useEffect } from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [showAdd,setShowAdd]=useState(false)
  const [tasks,setTask]=useState([])

  useEffect(()=>{
    const getTasks= async ()=>{
      const tasksFromServer= await fetchTasks()
      console.log(tasksFromServer)
      setTask(tasksFromServer)
    }
    getTasks()
  },[])

//fetch tasks

const fetchTasks= async ()=>{
  const res= await fetch("https://pondi-rudy-17.vercel.app/data/places")
  const data= await res.json()
  console.log(data)
  return data
}
// delet task
const deleteTask=async (id)=>{
  setTask(tasks.filter((task)=>task._id!==id))
  console.log(id)
  let dele=await fetch(`https://pondi-rudy-17.vercel.app/data/delete?id=${id}`,{
    method:"get"
  })
  
 setTask(tasks.filter((task)=>task.id!==id))
}
// toggle reminder
const toggleReminder=(id)=>{
  setTask(tasks.map((task)=>task.id==id?{...task,reminder:!task.reminder}:task))
}
//add task
const addTask=async (task)=>{
  // const id=Math.floor(Math.random()*10000)+1
  // const newTask={id,...task}
  // const addToServer=async()=>{
  //      await fetch("http://localhost:4000/tasks",{
  //       method:"post",
  //       body:[newTask]
  //      })
  // }
  // addToServer()
  // setTask([...tasks,newTask])
  //setTask(...tasks,task)
  setTask([...tasks,task])
  const res= await fetch("https://pondi-rudy-17.vercel.app/data/data/insert",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(task)

  })
  const data=await res.json()
  console.log(data)
  setTask([...tasks,task])
}
  
  return (
   <Router>
   <div className='container'>
    <Header title="hello" onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd}/>
    <Routes>
    <Route path="/"  element={
      <>
      {showAdd &&<AddTask onAdd={addTask}/>}
      {tasks.length>0?<Task tasks={tasks} ondelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks to shhow"}
      </>
    }/>
    
    
    <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
   
   </div>
   </Router>
  
  );
}

export default App;
