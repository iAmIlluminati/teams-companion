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