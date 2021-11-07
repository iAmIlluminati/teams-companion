import TabBar from './TabBar';
import { useHistory,Link} from 'react-router-dom';
import SettingsMenu from './SettingsMenu';

function AskQues() {
  return (
    <>
      <SettingsMenu type="back" url="/forum"/>
    </>
  )
}
export default AskQues;