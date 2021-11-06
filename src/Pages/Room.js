
function Room() {
  
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
  

  return (<>
    <div className="containerCentered "  style={{ backgroundColor: "#55E6C1" }}>
      <div className="container">
        <div className="row">
        <a className="btn btn-outline-dark signin" onClick={() => { console.log("Clicking") }} role="button" style={buttonStyle}>
          <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Create Room Icon" src="/asserts/img/icons/createRoom.png" />
          Create Room
        </a>
        </div>                                                                           

        <div className="row" style={{margin:"1vh"}}>

        </div>

        <div className="row">
        <a className="btn btn-outline-dark signin" onClick={() => { console.log("Clicking") }} role="button" style={buttonStyle}>
          <img width="20px" style={{ marginBottom: "3px", marginRight: "12px" }} alt="Create Room Icon" src="/asserts/img/icons/joinRoom.png" />
          Join Room
        </a>
        </div>
      </div>
    </div>
  </>);
}
export default Room;
