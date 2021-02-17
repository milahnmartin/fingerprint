

const database = firebase.database();
const rootref = database.ref('fortnite/pro');
let myurl = new URL(window.location.href);
let myplayer = myurl.searchParams.get('player');
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
        document.title = 'FINGERPRINT - ' + myplayer.toLocaleUpperCase();
        InfoTable(myplayer);
        mouseTable(myplayer);
        monitorTable(myplayer);
        gearTable(myplayer);
        crosshairTable(myplayer);
        profileTable(myplayer);
        bindsTable(myplayer);

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
        let zoom_sens = player_data['scope_sens']


        $('#player-mouse-table').append(
            `
            <tr>
            <td>${dpi}</td>
            <td>${sens}</td>
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
        let color_blind = player_data['color_blind_mode'];
        let sprint_default = player_data['sprint_default']
        let edit_release = player_data['edit_release'];



        $('#player-fortnite-table').append(
            `
            <tr>
            <td>${color_blind}</td>
            <td>${sprint_default}</td>
            <td>${edit_release}</td>
            </tr>

            `
        )
    })
}

const profileTable = (player) => {
    rootref.on('value', links => {
        let fn_tracker = links.val()[player]['fortnite_tracker'];

        $('#player-link-table').append(
            `
            <tr>
            <td>${fn_tracker}</td>
            </tr>

            `
        )

    })
}



const bindsTable = (player) => {
  rootref.on('value', links => {
      let info = links.val()[player];
      let ramp_bind = info['ramp_bind'];
      let cone_bind = info['cone_bind'];
      let wall_bind = info['wall_bind'];
      let floor_bind = info['floor_bind'];

      $('#player-binds-table').append(
          `
          <tr>
          <td>${ramp_bind}</td>
          <td>${cone_bind}</td>
          <td>${wall_bind}</td>
          <td>${floor_bind}</td>
          </tr>

          `
      )

  })
}
