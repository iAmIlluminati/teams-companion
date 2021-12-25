import BarGraph from './Components/BarGraph';
import Card from './Components/Card';
import TabBar from './TabBar'
import CarouselMaker from './Components/CarouselMaker'
import {  activeUser } from '../config/firebase'

//import { useHistory,Link} from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
let propSample1 ={
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
      
    <CarouselMaker/>
      {/* <Card  {...propSample1} /> */}

    </>
  )
}
export default Calendar;