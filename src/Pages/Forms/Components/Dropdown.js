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
      <select className={props.name} aria-label={props.name}style={dropdownStyle}>
        {
          props.options.map((row) => {
            return<option value={row.id}  key={row.id}>{row.text}</option>
          })
        }
      </select>
    </>
  )
}
export default Dropdown;
