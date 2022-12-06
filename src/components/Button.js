const onClick=()=>{
    console.log("on click event")
}

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="btn" style={{backgroundColor:props.color}}color={props.color}>{props.text}</button>
  )
}

export default Button
