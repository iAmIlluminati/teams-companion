import Card from './Components/Card';
import TabBar from './TabBar';
import Carousel from 'react-bootstrap/Carousel' 

import { useHistory,Link} from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
let propSample1 ={
    bgColor : "#f7d794",
    tagBg : "#009432",
    tagText : "Completed",
    tagColor : "white",
    title: "Mini Project on CN with Java",
    content : "Due : 13th Nov"
  }
function Calendar() {
  return (
    <>
      <SettingsMenu type="menu"/>
      <TabBar />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Card  {...propSample1}  />

    </>
  )
}
export default Calendar;