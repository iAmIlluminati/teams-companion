function SubmitButton(props) {
  let submitStyle = {
    textTransform: "none",
    border: "1px black solid",
    color: "black",
    boxShadow: "1px 1px grey",
    fontWeight: "500",
    width: "50vw",
    minWidth: "220px",
    maxWidth:"400px",
    backgroundColor: "white",
    height:"4vh"
  }
  return (
    <>
      <input type="submit"
        onClick={() => props.callback()}
      style={submitStyle} value={props.text}/>
    </>
  )
}
export default SubmitButton;