const database = firebase.database();
const rootref = database.ref('/users/CS');
let myurl = new URL(window.location.href);
console.log(myurl);
let myplayer = myurl.searchParams.get('player');
myplayer = myplayer.toUpperCase();
console.log(myplayer);
rootref.on('value', info => {
    let mydata = new Object();
    mydata = info.val();
    let detailedplayer = new Object();
    detailedplayer = mydata[myplayer];
    if (detailedplayer == undefined) {
        console.log('user doesnt exist');
    }
    else {
        console.log(detailedplayer);
        console.log(detailedplayer.monitor);
    }
});
