let navbarStyle = {
  position: "sticky",
  top: "0",
  backgroundColor:"grey"
}
function Navbar() {
  return (
    <div style={navbarStyle}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link " href="/room">Calender</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link " href="/forum">Forum</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;