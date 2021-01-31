const database = firebase.database();
const rootref = database.ref('/users/CS');
let myurl = new URL(window.location.href);
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
        let playerName = document.getElementById('player-name-header').innerHTML = 'Player Not Found, List of Availible Players:';
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
        console.log(user_keys);

       

        user_keys.forEach(players => {
            let username = players;
            let team = users[players].signed;
            let player_info = users[players].info;
            let player_age = users[players].cpu;
           $('.new-feed').append(

               `
                
             

               `
           )
        })
    })
}