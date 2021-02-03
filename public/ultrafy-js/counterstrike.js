

const database = firebase.database();
const rootref = database.ref('counterstrike/pro');
let myurl = new URL(window.location.href);
let myplayer = myurl.searchParams.get('pro');
myplayer = myplayer.toUpperCase();
rootref.on('value', info => {
    let mydata = new Object();
    mydata = info.val();
    let detailedplayer = new Object();
    detailedplayer = mydata[myplayer];
    if (detailedplayer == undefined) {
      
        let playerName = document.getElementById('player-name-header').innerHTML = 'Player was not Found, here is a list of Players :';
        
        


    }
    else {
        let playerName = document.getElementById('player-name-header').innerHTML = myplayer;
        InfoTable(myplayer);
    }
});


const InfoTable = (player) => {
    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
        console.log(player_data)
        let age = player_data['age'];
        let fullname = player_data['fullname'];
        let team = player_data['team'];


        $('#player-info-table').append(
            `
            <tr>
            <td>${fullname}</td>
            <td>${team}</td>
            <td>${age}</td>
            </tr>
            `
        )
    })
}

