import { IonItem,IonLabel,IonSelectOption,IonSelect } from '@ionic/react';
function Dropdown(props) {
  let title = props.title;
  let choices = props.choices;
  let renderOption = choices.map(choice => {
    return(<IonSelectOption mode ="ios" value={choice.id} key={choice.id}>{choice.name}</IonSelectOption>)
  })
  return (
    <>
      <IonItem mode ="ios">
          <IonLabel mode ="ios">{title}</IonLabel>
          <IonSelect value={choices[0].id} key={choices[0].id} mode ="ios" name={title}>
            {renderOption}
          </IonSelect>
      </IonItem>
    </>
  )
}
export default Dropdown;
