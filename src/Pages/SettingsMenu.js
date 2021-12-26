import { useState } from 'react'
import { navigate } from '@reach/router';
import { signOutGmail } from "../config/firebase";
function SettingsMenu(props) {
  let [backdrop, setBackdrop] = useState()
  let oldBg = document.body.style.backgroundColor;
  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    setBackdrop(<div className="backdrop"></div>);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.body.style.backgroundColor = oldBg;
    setBackdrop(<></>);
  }
  let icon = ""
  let onClkFun=""
  if (props.type === "menu") {
    onClkFun = openNav;
    icon="/asserts/img/icons/menu.png"
  }
  else { //only back as of now
    onClkFun = () => { navigate(props.url) };
    icon="/asserts/img/icons/back.png"

  }
  return (
    <>
      {backdrop}
      <div id="mySidenav" className="sidenav" style={{ zIndex: "10" }}>
        <ul>
          <li className="closebtn" onClick={closeNav}>&times;</li>
          <li>Room ID : 1a2De3 </li>
          <li>Profile</li>
          <li>Leave Room</li>
          <li onClick={signOutGmail}>Signout</li>
        </ul>
      </div>
      <div id="outView" style={{backgroundColor:"#f8f8f8"}}>
        <span onClick={onClkFun}>
        <img width="20px" style={{ left:"1.5rem",top:"1.5rem",position :"fixed" }} alt="NavIcon" src={icon} />
        </span>
        <div className="smallGap" ></div>
      </div>
    </>
  )
}
export default SettingsMenu;