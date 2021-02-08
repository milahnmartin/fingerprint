

const database = firebase.database();
const rootref = database.ref('counterstrike/pro');
let myurl = new URL(window.location.href);
let myplayer = myurl.searchParams.get('pro');
myplayer = myplayer.toUpperCase();
rootref.on('value', info => {
    let mydata = {};
    mydata = info.val();
    let detailedplayer = {};
    detailedplayer = mydata[myplayer];
    if (detailedplayer == undefined) {
      
        let playerName = document.getElementById('player-name-header').innerHTML = 'Player was not Found, here is a list of Players :';
        
        


    }
    else {
        let playerName = document.getElementById('player-name-header').innerHTML = myplayer;
        InfoTable(myplayer);
        mouseTable(myplayer);
        monitorTable(myplayer);
        gearTable(myplayer);
        crosshairTable(myplayer);
        profileTable(myplayer);
    
    }
});


const InfoTable = (player) => {
    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
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


const mouseTable = (player) => {

    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
        let dpi = player_data['dpi'];
        let sens = player_data['sensitivity'];
        let raw_input = player_data['raw_input'];
        let zoom_sens = player_data['zoom_sens']


        $('#player-mouse-table').append(
            `
            <tr>
            <td>${dpi}</td>
            <td>${sens}</td>
            <td>${raw_input}</td>
            <td>${zoom_sens}</td>
            </tr>
            `
        )
    })
}


const monitorTable = (player) => {

    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
        let res = player_data['resolution'];
        let aspect_ratio = player_data['aspect_ratio'];
        let scaling = player_data['scaling_mode'];
        let hz = player_data['monitor_hz']


        $('#player-monitor-table').append(
            `
            <tr>
            <td>${res}</td>
            <td>${aspect_ratio}</td>
            <td>${scaling}</td>
            <td>${hz}</td>
            </tr>

            `
        )
    })
}

const gearTable = (player) => {

    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
        let monitor = player_data['monitor'];
        let mouse = player_data['mouse'];
        let keyboard = player_data['keyboard'];
        let headset = player_data['headset']


        $('#player-gear-table').append(
            `
            <tr>
            <td>${monitor}</td>
            <td>${mouse}</td>
            <td>${keyboard}</td>
            <td>${headset}</td>
            </tr>

            `
        )
    })
}


const crosshairTable = (player) => {
    rootref.on('value', data => {
        let response = data.val();
        let player_data = response[player];
        let crosshair = player_data['crosshair_code'];
      


        $('#player-crosshair-table').append(
            `
            ${crosshair}

            `
        )
    })   
}

const profileTable = (player) => {
    rootref.on('value', links => {
        let esea = links.val()[player]['esea'];
        let faceit = links.val()[player]['faceit'];

        $('#player-link-table').append(
            `
            <tr>
            <td>${faceit}</td>
            <td>${esea}</td>
            </tr>

            `
        )

    })
}

