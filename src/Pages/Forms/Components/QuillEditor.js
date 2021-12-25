import fetch from 'isomorphic-unfetch';
import React from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme


export default () => {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'image'],
    ],
  };

  const placeholder = 'Type the Question';
  const formats = ['bold', 'italic', 'underline', 'strike'];
  const theme = 'snow';
  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });
  
  let areaStyle = {
    width: "84vw",
    marginLeft: "auto",
    marginRight: "auto",
    height:"50vh"  //height not working
    
  }
  // Insert Image(selected by user) to quill
  const insertToEditor = (url) => {
    const range = quill.getSelection();
    quill.insertEmbed(range.index, 'image', url);
  };

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async (file) => {
    const body = new FormData();
    body.append('file', file);

    const res = await fetch('Your Image Server URL', { method: 'POST', body });
    insertToEditor(res.uploadedImageUrl);
  };

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  };

  React.useEffect(() => {
    if (quill) {
      // Add custom handler for Image Upload
      quill.getModule('toolbar').addHandler('image', selectLocalImage);
    }
  }, [quill]);

  return (
    <div style={areaStyle}>
      <div style={{ border: '1px solid lightgray'}}>
        <div ref={quillRef} />
      </div>
    </div>
  );
};