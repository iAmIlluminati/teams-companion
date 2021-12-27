import React from 'react';
// or const { useQuill } = require('react-quilljs');
import DefaultTopGap from './Components/DefaultTopGap';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
import QuillEditor from './Forms/Components/QuillEditor';

import Checkbox from './Forms/Components/Checkbox';
import SettingsMenu from './SettingsMenu';
import SubmitButton from './Forms/Components/SubmitButton';
import MiniInput from './Forms/Components/MiniInput';
import  DatePicker from "./Forms/Components/DatePicker"

import Dropdown from './Forms/Components/Dropdown';

function AskQues() {
  
  return (
    <>
      <SettingsMenu type="back" url="/forum" />
      <DefaultTopGap/>
      <Dropdown />
      <Checkbox />
      <MiniInput/>
      <SubmitButton/>
      <DatePicker/>
      <QuillEditor style={{height:"50vh"}}/>
    </>
  )
}
export default AskQues;