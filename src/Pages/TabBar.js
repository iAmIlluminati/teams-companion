let tabBarStyle = {
  position: "sticky",
  top: "4.8rem", //calculated from menu css
  backgroundColor: "#F8F8F8",
  color: "black",
  // height: "3.2em",
  fontWeight: "650",
  fontSize: "1.6rem",
  zIndex: "2",
  boxShadow: "0px 0.5px #C0C0C0",
  // borderBottom:"0.1px solid black"


}
let tabStyle = {
  width:"50vw"
}
function TabBar() {
  let url = window.location.pathname
  var cal = ""
  var forum=""
  if (url = "/forum") {
    cal = "nav-link";
    forum = "nav-link active";
  }
  else {
    cal = "nav-link active";
    forum = "nav-link";
  }
  return (
    <div style={tabBarStyle}>
      <ul className="nav nav-tabs" style={tabBarStyle}>
        <li className={cal} style={tabStyle}>
          <a className="nav-link " href="/calendar">Calender</a>
        </li>
        <li className={forum} style={tabStyle}>
          <a className="nav-link " href="/forum">Forum</a>
        </li>
      </ul>
    </div>
  );
}
export default TabBar;