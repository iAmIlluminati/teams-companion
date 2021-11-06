import Card from './Components/Card';
import TabBar from './TabBar';
import { useHistory } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
function ForumHomepage() {
  let pageStyle = {
    // backgroundColor: "#BDC581",
    height: "100%",
    minHeight: "100vh",        
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
    left: "70vw",
    bottom: "9vh",
    boxShadow: "1.5px 1.5px 5px #C0C0C0"

  }
  let propSample ={
    bgColor : "#F8F8F8",
    tagBg : "#182C61",
    tagText : "Primary",
    tagColor : "white",
    title: "Computer Networks Assignment on FTP",
    
    content : "Sample Content of the Question"
  }
  return (
    <>
      <SettingsMenu/>
      <TabBar/>
      <div style={pageStyle}>
        
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample}/>
        <Card  {...propSample} />
      </div>
      <button type="button" style={roundButton} onClick={() => { redirect("/askques") }}>
          <img width="35px" alt="Ask Question" src="/asserts/img/icons/askQues.png" />
      </button>
    </>
  )
}
export default ForumHomepage;