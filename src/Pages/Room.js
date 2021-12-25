import { useHistory } from 'react-router-dom';
import ImageButton from './Forms/Components/ImageButton';

function Room() {
  
  let history = useHistory();
  const redirect = (url) => {
    history.push(url)
  }
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
        {/* <a className="btn btn-outline-dark signin" onClick={() => { redirect("/createroom") }} role="button" style={buttonStyle}>
          <img width="20px" style={{ marginBottom: "3px", marginRight: "5px" }} alt="Create Room Icon" src="/asserts/img/icons/createRoom.png" />
          Create Room
        </a> */}
          
          <ImageButton alt="Create Room Icon"
            src="/asserts/img/icons/createRoom.png"
            text="Create Room"
            event={() => { redirect("/createroom") }}>  
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
            event={() => { redirect("/joinroom") }} >  
          </ImageButton>

        </div>
      </div>
    </div>
  </>);
}
export default Room;
