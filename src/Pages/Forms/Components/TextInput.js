function TextInput(props) {
  let textStyle = {
    width: "70vw",
    fontSize: "2.1rem",
    textAlign: "center",
    textTransform: "none",
    border: "1px black solid",
    color: "black",
    fontWeight: "500",
    width: "50vw",
    minWidth: "220px",
    maxWidth:"400px",
    backgroundColor: "white",
    borderRadius: "4px",
    height: "6vh",
      //  display: "block"
    // margin: "1vh"
   // boxShadow: "1px 1px grey",
    
  }
  return (
    <>
    <input type="text" maxlength="10" name={props.name} style={textStyle}></input><br/>
    </>
  )
}
export default TextInput;