import ImageButton from './Forms/Components/ImageButton';
import {navigate} from "@reach/router"
function Room() {
  

  

  return (<>
    <div className="containerCentered "  style={{ backgroundColor: "#55E6C1" }}>
      <div className="container">
        <div className="row">
        {/* <a className="btn btn-outline-dark signin" onClick={() => { redirect("/createroom") }} role="button" style={buttonStyle}>
          <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Create Room Icon" src="/asserts/img/icons/createRoom.png" />
          Create Room
        </a> */}
          
          <ImageButton alt="Create Room Icon"
            src="/asserts/img/icons/createRoom.png"
            text="Create Room"
            event={() => { navigate("/createroom") }}>  
          </ImageButton>
          
        </div>                                                                           

        <div className="row" style={{margin:"1vh"}}>

        </div>

        <div className="row">
        {/* <a className="btn btn-outline-dark signin" onClick={() => { redirect("/joinroom") }} role="button" style={buttonStyle}>
          <img width="20px" style={{ marginBottom: "3px", marginRight: "12px" }} alt="Create Room Icon" src="/asserts/img/icons/joinRoom.png" />
          Join Room
        </a> */}
          
          <ImageButton alt="Join Room Icon"
            src="/asserts/img/icons/joinRoom.png"
            text="Join Room"
            event={() => { navigate("/joinroom") }} >  
          </ImageButton>

        </div>
      </div>
    </div>
  </>);
}
export default Room;
