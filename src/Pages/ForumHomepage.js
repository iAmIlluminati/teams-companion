import Card from './Components/Card';
import TabBar from './TabBar';
import { navigate } from '@reach/router'
import SettingsMenu from './SettingsMenu';
function ForumHomepage() {
  //document.body.style.backgroundColor = "#FEA47F";
  let pageStyle = {
    // backgroundColor: "",
    height: "100%",
    minHeight: "100vh",
    marginTop:"10.5rem"
  }
  let roundButton = {
    width: "6rem",
    height: "6rem",
    borderRadius: "100%",
    border: "none",
    backgroundColor: "#182C61",
    color: "white",
    fontWeight: "700",
    fontSize: "1.5em",
    textAlign: "center",
    alignItems: "center",
    justifyContent:"center",
    position: "sticky",
    left: "70%",
    bottom: "9%",
    boxShadow: "1.5px 1.5px 5px #C0C0C0"

  }
  let propSample1 ={
    bgColor : "#ececec",
    tagBg : "#182C61",
    tagText : "Computer Networks",
    tagColor : "white",
    title: "TCP Handshake",
    content : <p className='card-text'>Did anyone take notes on 3 way and 4 way...</p>
  }
  let propSample2 ={
    bgColor : "#ececec",
    tagBg : "#6D214F",
    tagText : "Compiler",
    tagColor : "white",
    title: "Parse Tree",
    content : <p className='card-text'>The nodes in the parse tree are computed..</p>
  }
  let propSample3 ={
    bgColor : "#ececec",
    tagBg : "#079992",
    tagText : "Database",
    tagColor : "white",
    title: "XML and XSLT",
    content : <p className='card-text'>"How to link XSL sheet with the XML ?"</p>
  }
  let propSample4 ={
    bgColor : "#ececec",
    tagBg : "#6D214F",
    tagText : "Compiler",
    tagColor : "white",
    title: "NFA to DFA",
    content : <p className='card-text'>The trap state in assigment 1 seems ...</p>
  }
  let propSample5 ={
    bgColor : "#ececec",
    tagBg : "#079992",
    tagText : "Database",
    tagColor : "white",
    title: "Connecting MongoDB with PHP",
    content : <p className='card-text'>I had issues with connecting Mongo with Composer PHP..</p>
  }
  let propSample6 ={
    bgColor : "#ececec",
    tagBg : "#182C61",
    tagText : "Computer Networks",
    tagColor : "white",
    title: "FTP Protocol",
    content : <p className='card-text'>What is the header for FTP ? The transaction...</p>
  }
  return (
    <>
      <SettingsMenu type="menu"  url=""/>
        <TabBar/>
      <div style={pageStyle}>
        
        <Card  {...propSample1}/>
        <Card  {...propSample2}/>
        <Card  {...propSample3}/>
        <Card  {...propSample4}/>
        <Card  {...propSample5}/>
        <Card  {...propSample6} />
      </div>
      <button type="button" style={roundButton} onClick={()=>{navigate("/askques")}}>
          <img width="35px" alt="Ask Question" src="/asserts/img/icons/askQues.png" />
      </button>
    </>
  )
}
export default ForumHomepage;