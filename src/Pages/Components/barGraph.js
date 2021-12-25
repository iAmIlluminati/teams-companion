function BarGraph(props) {
  //const color,text,
  const barStyle = {
    background: "steelblue",
    padding: "1.5vh 3vh 1.5vh 1.5vh",
    margin: "1px",
    width: "80%",
    fontWeight: "600",
    textAlign: "right",
    color: "white",
    fontSize: "0.9rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }
  let colorPallet=["#7B241C",
                    "#633974",
                    "#1A5276",
                    "#117864",
                    "#196F3D",
                    "#9A7D0A",
                    "#935116",
    "#212F3C"]
  colorPallet="#7B241C"
  
  return (
    <>
      <div style={barStyle}>Computer Networks  | 08:30 - 09:30</div>
      {/* <div style={barStyle}>Computer Architecture  | 10:30 - 12:10</div>
      <div style={barStyle}>Web Technology  | 01:10 - 02:30</div>
      <div style={barStyle}>Philosophy  | 02:40 - 04:20</div> */}
      
    </>
  );
}
export default BarGraph;