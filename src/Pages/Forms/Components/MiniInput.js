import { Callbacks } from "jquery"

function MiniInput(props) {
  let textStyle = {
    // width: "50vw",
    fontSize: "2.1rem",
    textAlign: "center",
    textTransform: "none",
    border: "1px black solid",
    color: "black",
    fontWeight: "500",
    minWidth: "220px",
    maxWidth:"400px",
    backgroundColor: "white",
    borderRadius: "4px 0px 0px 4px",
    height: "6vh",
    flexGrow:"2"
  }
  let container = {
    outline: "none",
     display:"flex",
    flexDirection: "row",
    width:"10vw"
  }
  let imageStyle = {
    // float: "right",
    outline: "none",
    height: "6vh",

  }
  return (
    <div className="" style={container}>
      <input type="text" maxLength={props.length} name={props.name} style={textStyle} autoComplete="off"></input><br />
      <img onClick={()=>{props.callback(true)}} src="/asserts/img/icons/enter.png" alt="Submit Button" style={imageStyle}/>
    </div>
  )
}
export default MiniInput;