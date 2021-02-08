const database = firebase.database();
const rootRef = database.ref('counterstrike/pro')
//
// rootRef.orderByChild('clicks').limitTofirst(2).on("value", data => {
//     let info = data.val();
//
//     console.log(info)
// })