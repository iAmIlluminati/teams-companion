import {useState} from 'react'
function SettingsMenu() {
  let [backdrop,setBackdrop]=useState()
  let oldBg = document.body.style.backgroundColor;
  function openNav() {
    document.getElementById("mySidenav").style.width = "70vw";
    setBackdrop(<div className="backdrop"></div>);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = oldBg;
    setBackdrop(<></>);
  }
  return (
    <>
      {backdrop}
      <div id="mySidenav" className="sidenav" style={{ zIndex: "10" }}>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div id="outView" style={{backgroundColor:"#f8f8f8"}}>
        <span onClick={openNav}>
        <img width="20px" style={{ left:"8vw",top:"5vw",position :"fixed" }} alt="Menu Icon" src="/asserts/img/icons/menu.png" />
        </span>
      <div className="smallGap" ></div>

      </div>
    </>
  )
}
export default SettingsMenu;