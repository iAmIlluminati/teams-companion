import { Form } from 'react-bootstrap';

//Placeholder
//Name
//Options

//the text of option holds the value..not the 
function Dropdown() {

  let dropdownStyle = {
    width: "80vw",
    height:"5vh",
    fontSize: "1.5rem",
    borderRadius: "3%",
    fontWeight:"500"
    
  }
  let props = {
    name: "Staffs",
    placeholder: "Select Staff",
    options: [
      {
        id: "1",
        text:"Kabali"
      },
      {
        id: "2",
        text:"Kaala"
      },
      {
        id: "3",
        text:"Kingsman"
      },

    ]
    
  }
  return (
    <>
      {/* <input type="text" list={props.name} placeholder={props.placeholder} style={dropdownStyle} />
      <datalist id={props.name}>
        {
          props.options.map(row => {
            return<option value={row.id}>{row.text}</option>
          })
        }
      </datalist> */}
      <select className={props.name} aria-label={props.name}style={dropdownStyle}>
          <option value={props.options[0].id} defaultValue>{props.options[0].text}</option>
        {
          props.options.map((row, index) => {
            if(index!=0)
            return<option value={row.id}  key={row.id}>{row.text}</option>
          })
        }
      </select>
    </>
  )
}
export default Dropdown;
