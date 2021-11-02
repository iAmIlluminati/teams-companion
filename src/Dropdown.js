import { IonItem,IonLabel,IonSelectOption,IonSelect } from '@ionic/react';
function Dropdown(props) {
  let title = props.title;
  let choices = props.choices;
  let renderOption = choices.map(choice => {
    return(<IonSelectOption value={choice.id} key={choice.id}>{choice.name}</IonSelectOption>)
  })
  return (
    <>
      <IonItem>
          <IonLabel>{title}</IonLabel>
          <IonSelect value={choices[0].id} key={choices[0].id}>
            {renderOption}
          </IonSelect>
      </IonItem>
    </>
  )
}
export default Dropdown;
