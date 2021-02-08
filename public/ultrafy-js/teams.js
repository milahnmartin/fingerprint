const database = firebase.database();
const rootref = database.ref('counterstrike/pro');
let myurl = new URL(window.location.href);
let myteam = myurl.searchParams.get('team');
myteam = myteam.toUpperCase();


rootref.on('value', info => {
    console.log(info.val())
})
