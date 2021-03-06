const submitReg = document.getElementById('submit-register');
const database = firebase.database();
const rootRef = database.ref('fortnite/pro')

submitReg.addEventListener('click' , e => {
    e.preventDefault();

    let fullname = document.getElementById('input-1').value;
    let gamertag = document.getElementById('input-2').value;
    let age = document.getElementById('input-3').value;
    let resolution = document.getElementById('input-4').value;
    let sensitivity = document.getElementById('input-5').value;
    let dpi = document.getElementById('input-6').value;
    let scope_sens = document.getElementById('input-7').value;
    let sprint_default = document.getElementById('input-8').value;
    let monitor_hz = document.getElementById('input-10').value;
    let color_blind_mode = document.getElementById('input-12').value;
    let monitor = document.getElementById('input-13').value;
    let mouse = document.getElementById('input-14').value;
    let keyboard = document.getElementById('input-15').value;
    let headset = document.getElementById('input-16').value;
    let current_team = document.getElementById('input-17').value;
    let brightness = document.getElementById('input-18').value;
    let vsyncc = document.getElementById('input-19').value;
    let fortnite_tracker = document.getElementById('input-26').value;
    let ramp_bind = document.getElementById('input-20').value;
    let cone_bind = document.getElementById('input-21').value;
    let floor_bind = document.getElementById('input-22').value;
    let wall_bind = document.getElementById('input-23').value;
    let edit_bind = document.getElementById('input-24').value;
    let edit_release = document.getElementById('input-25').value;



    rootRef.child(gamertag.toUpperCase()).update({
        fullname: fullname,
        gamertag: gamertag.toUpperCase(),
        age: age,
        resolution: resolution,
        sensitivity: sensitivity,
        dpi: dpi,
        scope_sens: scope_sens,
        sprint_default: sprint_default,
        monitor_hz: monitor_hz,
        color_blind_mode: color_blind_mode,
        monitor: monitor,
        mouse: mouse,
        keyboard: keyboard,
        headset: headset,
        team: current_team,
        brightness: brightness,
        vsyncc: vsyncc,
        ramp_bind:ramp_bind,
        cone_bind:cone_bind,
        floor_bind:floor_bind,
        wall_bind:wall_bind,
        edit_bind:edit_bind,
        edit_release:edit_release,
        fortnite_tracker:fortnite_tracker
    })


    document.getElementById('submit-register').innerHTML = 'Thank You ' + fullname + ' !';
    setTimeout(function(){
        window.location.assign('../index');
    }, 2000);


});
