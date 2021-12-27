import BarGraph from './Components/BarGraph';
import TabBar from './TabBar'
import CarouselMaker from './Components/CarouselMaker'
import { authStatus, activeUser } from '../config/firebase'
import SettingsMenu from './SettingsMenu';
import { useEffect } from "react";
import FormGenerator from "./Forms/FormGenerator"


//TODO Date input

let propSample1 = {
    bgColor : "#f7d794",
    tagBg : "#009432",
    tagText : "Completed",
    tagColor : "white",
    title: "Mini Project on CN with Java",
    content : "Due : 13th Nov"
  }
let BarGraphContainerStyle = {
      height: "100%",
    minHeight: "60vh",
    marginTop:"12.5rem"
}
console.log("Active User: ", activeUser)
function Calendar() {
  useEffect(() =>{
    authStatus("");
  },[])
  return (
    <>
      <SettingsMenu type="menu"/>
      <TabBar />
      
      <div className="BarGraphContainer" style={BarGraphContainerStyle}>
        <BarGraph/>
        <BarGraph/>
        <BarGraph/>
        <BarGraph/>
        <BarGraph/>
        <BarGraph/>
      </div>
      <FormGenerator id="forum"/>
    <CarouselMaker/>

    </>
  )
}
export default Calendar;