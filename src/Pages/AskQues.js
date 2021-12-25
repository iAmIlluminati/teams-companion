import React from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
import QuillEditor from './Forms/Components/QuillEditor';
import SettingsMenu from './SettingsMenu';
function AskQues() {

  return (
    <>
      {/* <SettingsMenu type="back" url="/forum" /> */}
      <QuillEditor style={{height:"1000px"}}/>
    </>
  )
}
export default AskQues;