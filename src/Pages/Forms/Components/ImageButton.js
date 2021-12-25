function ImageButton(prop) {
   let buttonStyle = {
    textTransform: "none",
    border: "1px black solid",
    color: "black",
    boxShadow: "1px 1px grey",
    fontWeight: "500",
    width: "50vw",
    minWidth: "220px",
    maxWidth:"400px",
    backgroundColor:"white"
    
  };
  return (
    <>
    <a className="btn btn-outline-dark signin" onClick={prop.event} role="button" style={buttonStyle}>
      <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt={prop.alt} src={prop.src} />
        {prop.text}
    </a>
    </>
  )
}
export default ImageButton;