
function Testing() {
   const docRef=await addDoc(collection(db, "testing"), {
      name: result.user.displayName,
      email: result.user.email,
      roomInfo:null ,
      type: "student",
      tagList: {}
    });
    console.log("Document written with ID: ", docRef.id);
}
export default Testing;