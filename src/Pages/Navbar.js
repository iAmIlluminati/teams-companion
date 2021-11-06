let navbarStyle = {
  position: "sticky",
  top: "0",
  backgroundColor: "#F8F8F8",
  color: "black",
  // height: "3.2em",
  fontWeight: "600",
  fontSize:"1.7rem"
}
let tabStyle = {
  width:"50vw"
}
function Navbar() {
  return (
    <div style={navbarStyle}>
      <ul className="nav nav-tabs" >
        <li className="nav-item" style={tabStyle}>
          <a className="nav-link " href="/room">Calender</a>
        </li>
        <li className="nav-item " style={tabStyle}>
          <a className="nav-link " href="/forum">Forum</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;