import FormStructure from './FormStructure.json'
import {model} from './Model.js'
function FormGenerator(props) {
  function FormSchemaFetcher(formName) {
    // let data = JSON.parse(FormStructure);
    let data = model;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === formName) {
        return data[i].properties;
      }
    }
  }
  let reqModel = FormSchemaFetcher(props.id);
  console.log(reqModel);
  
  for (let i = 0; i < reqModel.length; i++){
    if (reqModel[i].view === "hidden") {
      continue;
    }
    switch (reqModel[i].view) {
      case '':
              break;
      
      case '':
              break;
      
      case '':
              break;
      
      case '':
              break;
      
      case '':
              break;
      
      case '':
              break;
    }
  }
  return (
    <>
      
    </>
  )
}
export default FormGenerator;