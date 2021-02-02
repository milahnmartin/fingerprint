const submitReg = document.getElementById('submit-register');
const database = firebase.database();
const rootRef = database.ref('counterstrike/pro')

submitReg.addEventListener('click' , e => {
    e.preventDefault();

    let fullname = document.getElementById('input-1').value;
    let gamertag = document.getElementById('input-2').value;
    let age = document.getElementById('input-3').value;
    let resolution = document.getElementById('input-4').value;
    let sensitivity = document.getElementById('input-5').value;
    let dpi = document.getElementById('input-6').value;
    let zoom_sens = document.getElementById('input-7').value;
    let raw_input = document.getElementById('input-8').value;
    let aspect_ratio = document.getElementById('input-9').value;
    let monitor_hz = document.getElementById('input-10').value;
    let scaling_mode = document.getElementById('input-11').value;
    let crosshair_code = document.getElementById('input-12').value;
    let monitor = document.getElementById('input-13').value;
    let mouse = document.getElementById('input-14').value;
    let keyboard = document.getElementById('input-15').value;
    let headset = document.getElementById('input-16').value;
    let current_team = document.getElementById('input-17').value;



    rootRef.child(gamertag.toUpperCase()).update({
        fullname: fullname,
        gamertag: gamertag.toUpperCase(),
        age: age,
        resolution: resolution,
        sensitivity: sensitivity,
        dpi: dpi,
        zoom_sens: zoom_sens,
        raw_input: raw_input,
        aspect_ratio: aspect_ratio,
        monitor_hz: monitor_hz,
        scaling_mode: scaling_mode,
        crosshair_code: crosshair_code,
        monitor: monitor,
        mouse: mouse,
        keyboard: keyboard,
        headset: headset,
        team: current_team
    })


    document.getElementById('submit-register').innerHTML = 'Thank You ' + fullname + ' !';
    setTimeout(function(){
        window.location.assign('./index');
     }, 2000);
   

});