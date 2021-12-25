import Card from './Card';
import React, { useState,useEffect  } from "react";

let propSample1 ={
    bgColor : "rgb(217 217 217)",
    tagBg : "#009432",
    tagText : "Completed",
    tagColor : "white",
    title: "Mini Project on CN with Java",
    content : "Due : 13th Nov"
  }
let prevBtn = {
  outline: "none",
  border: "none",
  // background: 'none',
  // height: "2.3rem",
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "auto",
  marginRight:"auto",
  fontWeight: "700",
  fontSize: "2rem",
  padding:"auto auto",
  justifyText:"center",
  borderRadius: "30%",
}
let nextBtn = {

  outline: "none",
  border: "none",
  // background: 'none',
  // height: "2.3rem",
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "auto",
  marginRight:"auto",
  fontWeight: "700",
  fontSize: "2rem",
  justifyText:"center",
  borderRadius: "30%",
  // borderRadius: "50%",
}
let carouselStyle = {
  display: "flex",
  margin:"0",
  justifyContent: "center"
}      
let prop = [<Card  {...propSample1} tagText="First" />, <Card  {...propSample1} tagText="Second" />, <Card  {...propSample1} tagText="Third" />,
<Card  {...propSample1} tagText = "Fourth"/>];
function CarouselMaker() {
 
  let len = prop.length;
  let [activeindex,setIndex] = useState(1000*len);
  let [activeCard, setCard] = useState(prop[0]);
  useEffect(() => {
    setCard(prop[activeindex % len]);
  },[activeindex]);

  function nextSlide() {
    // console.log((activeindex + 1)%len)
    setIndex(activeindex + 1);
  }
  function prevSlide() {
     setIndex(activeindex - 1);
  }
  return (
    <div style={carouselStyle}>
      <a onClick={prevSlide} style={prevBtn}> <img src="/asserts/img/icons/prevImg.png" style={{width:"2rem"}}/></a>
      {activeCard}
      <a onClick={nextSlide} style={prevBtn}> <img src="/asserts/img/icons/nextImg.png" style={{width:"2rem"}}/> </a>
    </div>
  )
}



export default CarouselMaker;

// function Carousel(prop) {
//   const len = props.card.length;
//     const visible={
//     visibility: "visible"
//   }
//   const invisible={
//     visibility: "hidden"
//   }
//   let visiblityArray = [];
//   if (len > 0) {
//     visiblityArray.push("visible");
//   }
//   for (let i = 1; i < len; i++){
//     visiblityArray.push("invisible");
//   }
//   const [vis, setVisiblity] = useState(visiblityArray);
//   const n = function nextSlide() {
//     let t = vis.pop();
//     vis.unshift(t);
//     // vis.unshift(vis.pop())
//     setVisiblity([...vis]);
//     // console.log(vis);
//   }

//   const p =function previousSlide(){
//     let t = vis.shift();
//     vis.push(t);
//     // vis.push(vis.shift())
//     setVisiblity([...vis]);
//     // console.log(vis);
//   }
//   return (
//     <>
//             <button className="" onClick={n}>&#x276F;</button>
//             <button className="" onClick={p}>&#x276E;</button>
//     </>
//   );
// }
// export default Carousel;