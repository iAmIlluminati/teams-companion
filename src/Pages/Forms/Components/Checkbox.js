import { useState } from 'react';
function Checkbox(props) {
  let checkContainer = {
    display: "block",
    position: "relative",
    cursor: "pointer",
    fontSize: "2rem",
  }
  //to hide the default  CheckBox
  let styleCheckbox = {
    opacity: "0",
    cursor: "pointer",
    height: "0",
    width: "0",
  }
  let [isChecked, setChecked] = useState(false);
  function whenCheckChanged() {
    setChecked(!isChecked);
    if (isChecked) {  //the box of true, set the state needs
      console.log("False Now")
      //props.callback(true);
    }
    else {
      console.log("True Now")
      //props.callback(false);
    }
  }
  return (
    <>
      
      
      <label htmlFor={props.name} style={checkContainer}>{props.text}
        <input type="checkbox"
          id={props.name} name={props.name}
          onChange={whenCheckChanged} checked={isChecked}
          style={styleCheckbox} />
        <span className="checkmark"></span>
      </label>
    </>
  )
}
export default Checkbox;