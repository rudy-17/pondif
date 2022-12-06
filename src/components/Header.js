import Button from "./Button"
import Task from "./Tasks"



const Header = (props) => {

  return (
   <header className="header">
    <h1>kaha kaha jana he?</h1>
    <Button color={props.showAdd?"red":"green"} text={props.showAdd?"Close":"Add"} onClick={props.onAdd}/>
    
   </header>
  )
}

export default Header
