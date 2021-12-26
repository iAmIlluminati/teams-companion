import { useState } from 'react';
function Checkbox(props) {
  let styleCheckbox = {
    // textAlign: "center",
    // marginBottom:"auto",
    // marginTop:"auto"
  }
  let [isChecked, setChecked] = useState(false);
  function whenCheckChanged() {
    setChecked(!isChecked);
    if (isChecked) {  //the box of true, set the state needs
      console.log("True Now")
      //props.trueBoxFun();
    }
    else {
      console.log("False Now")
      //props.falseBoxFun();
    }
  }
  return (
    <>
      <input type="checkbox"
        id={props.name} name={props.name}
        onChange={whenCheckChanged} checked={isChecked}
        style={styleCheckbox} />
      
      <label htmlFor={props.name}>{props.text}</label>
    </>
  )
}
export default Checkbox;