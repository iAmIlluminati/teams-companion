import TagGenerator from "./TagGenerator";
function QuestionCard(props) {

  let cardStyle={
    maxWidth: "55em",
    // minWidth: "70vm",
    width:"80%",
    padding: ".6em .7em",
    border: "0.2px 0 solid",
    borderRadius: "3px",
    margin:"auto",
    backgroundColor: props.bgColor,
    justifyContent: "left",
    textAlign: "left",
    marginTop:"1.3rem",
    position: "relative",
    color:"#2C3A47"
  }
  let tagProp = {
    text: props.tagText,
    bgColor: props.tagBg,
    textColor: props.tagColor
  }
  return (
    <>
      <div style={cardStyle} className="card">
        <div className="card-body">
          <TagGenerator {...tagProp} />
          <div className="smallGap"></div>
          <h5 className="card-title">{props.title}</h5>
          {props.content}
        </div>      
      </div>
    </>
  )
}
export default QuestionCard;