const database = firebase.database();

const rootref = database.ref('/users/CS');


let myurl = new URL('https://fingerprint.com/counterstrike/')
console.log(myurl);

myurl.searchParams.set('player','BNY');

let myplayer = myurl.searchParams.get('player');

console.log(myplayer);





rootref.on('value', info => {
    let mydata = info.val()[myplayer];

    console.log(mydata);
})


