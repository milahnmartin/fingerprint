const database = firebase.database();
const rootRef = database.ref('users/CS');




rootRef.on('value', data => {
    data.forEach(element => {
            // console.log(element.key, element.val())
    });
})