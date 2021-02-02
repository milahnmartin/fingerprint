

const database = firebase.database();
const rootref = database.ref('counterstrike/pro');
let myurl = new URL(window.location.href);
let myplayer = myurl.searchParams.get('pro');
myplayer = myplayer.toUpperCase();
console.log(myplayer);
rootref.on('value', info => {
    let mydata = new Object();
    mydata = info.val();
    let detailedplayer = new Object();
    detailedplayer = mydata[myplayer];
    if (detailedplayer == undefined) {
      
        let playerName = document.getElementById('player-name-header').innerHTML = 'Player was not Found, here is a list of Players :';
        showPlayers();
        


    }
    else {
        console.log(detailedplayer);
        let playerName = document.getElementById('player-name-header').innerHTML = myplayer;
    }
});


const showPlayers = () => {
    rootref.orderByChild('signed').on('value', info => {
        let users = new Object();
        users = info.val()

        let user_keys = Object.keys(users);
       

        user_keys.forEach(value => {
            let user = value;
            let team = users[value].signed;
            let age = users[value].cpu;
            let res = users[value].res;
            let sens = users[value].sens;
            $('#table-user-feed').append(
                `

            
                `
            )

        })

     
    })
}
