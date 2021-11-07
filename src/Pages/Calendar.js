import Card from './Components/Card';
import TabBar from './TabBar';
import { useHistory } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';

function Calendar() {
  return (
    <>
      <SettingsMenu type="menu"/>
      <TabBar />
    </>
  )
}
export default Calendar;