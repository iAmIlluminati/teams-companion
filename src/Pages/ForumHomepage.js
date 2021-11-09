import Card from './Components/Card';
import TabBar from './TabBar';
import { useHistory } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
function ForumHomepage() {
  document.body.style.backgroundColor = "#FEA47F";
  let pageStyle = {
    // backgroundColor: "",
    height: "100%",
    minHeight: "100vh",
    marginTop:"10.5rem"
  }
  let history = useHistory();
  const redirect = (url) => {
    history.push(url)
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
    bgColor : "#F8F8F8",
    tagBg : "#182C61",
    tagText : "Computer Networks",
    tagColor : "white",
    title: "TCP Handshake",
    content : "Did anyone take notes on 3 way and 4 way..."
  }
  let propSample2 ={
    bgColor : "#F8F8F8",
    tagBg : "#6D214F",
    tagText : "Compiler",
    tagColor : "white",
    title: "Parse Tree",
    content : "The nodes in the parse tree are computed.."
  }
  let propSample3 ={
    bgColor : "#F8F8F8",
    tagBg : "#079992",
    tagText : "Database",
    tagColor : "white",
    title: "XML and XSLT",
    content : "How to link XSL sheet with the XML ?"
  }
  let propSample4 ={
    bgColor : "#F8F8F8",
    tagBg : "#6D214F",
    tagText : "Compiler",
    tagColor : "white",
    title: "NFA to DFA",
    content : "The trap state in assigment 1 seems ..."
  }
  let propSample5 ={
    bgColor : "#F8F8F8",
    tagBg : "#079992",
    tagText : "Database",
    tagColor : "white",
    title: "Connecting MongoDB with PHP",
    content : "I had issues with connecting Mongo with Composer PHP.."
  }
  let propSample6 ={
    bgColor : "#F8F8F8",
    tagBg : "#182C61",
    tagText : "Computer Networks",
    tagColor : "white",
    title: "FTP Protocol",
    content : "What is the header for FTP ? The transaction..."
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
      <button type="button" style={roundButton} onClick={() => { redirect("/askques") }}>
          <img width="35px" alt="Ask Question" src="/asserts/img/icons/askQues.png" />
      </button>
    </>
  )
}
export default ForumHomepage;