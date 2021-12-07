import TabBar from './TabBar';
import { useHistory,Link} from 'react-router-dom';
import SettingsMenu from './SettingsMenu';
// import Quill from 'quill/core';

// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
function AskQues() {
  const modules ={
    toolbar: {
      container: [
        [{'header':'1'},{'header':'2'},{'font':[]}],
        [{size:[]}],
        ['bold','italic','underline','strike','blockquote'],
        [{'list':'ordered'},{'list':'bullet'},
      {'indent':'-1'},{'indent':'+1'}],
      ['link','image'],
      ['clean'],['code-block']
      ],
   //  handlers: {
   //     insertStar: 'insertStar'
    //  }
    },
    clipboard: {
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  return (
    <>
      <SettingsMenu type="back" url="/forum" />
      {/* <ReactQuill 
          ref={(el) => this.quill=el}
          value={this.state.content}
          onChange={e => this.ocac(e)}
          theme='snow'
          modules={this.modules}
          formats={formats}
          
          
          /> */}
    </>
  )
}
export default AskQues;