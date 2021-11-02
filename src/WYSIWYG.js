
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
function WYSIWYG() {
  return (
      <Editor
        apiKey="w9s8vlpi3x722plt482e5ltvxrch7389x2vfciw6l5r46w7y"
      initialValue="<p>This is the initial content of the editor</p>"
        init={{
        // theme:"mobile",
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic underline | image link '
      }}
      
      />
    );
}

// class WYSIWYG extends React.Component {
//   handleEditorChange = (e) => {
//     console.log(
//       'Content was updated:',
//       e.target.getContent()
//     );
//   }
  

//   render(title) {
//     console.log(title)
    
//   }
// }

export default WYSIWYG;