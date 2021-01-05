firebase.auth().onAuthStateChanged((user) => {
  if (user) {

    var uid = user.uid;
 
    // ...
  } else {
    window.location.assign('./login');
  }
});

const user_name = document.getElementById('name');
const platform = document.getElementById('platform');
const info = document.getElementById('info');
const keyboard = document.getElementById('keyboard');
const mouse = document.getElementById('mouse');
const headset = document.getElementById('headset');
const monitor = document.getElementById('monitor');
const sens = document.getElementById('sens');
const cpu = document.getElementById('cpu');
const gpu = document.getElementById('gpu');
const ram = document.getElementById('ram');
const mobo = document.getElementById('mobo');
const controller = document.getElementById('controller');
const ping = document.getElementById('ping');
const res = document.getElementById('res');
const debut = document.getElementById('debut');
const signed = document.getElementById('signed');
const main_social = document.getElementById('main-social');
const btnReg = document.getElementById('submit');



const database = firebase.database();
const rootRefCS = database.ref('users/CS');
const rootRefFN = database.ref('users/FN');




btnReg.addEventListener('click', (e) => {

var game = $("input:radio[name ='inlineRadioOptions']:checked").val();
if(user_name.value == ""){
  btnReg.innerHTML = 'ERROR';
  alert('Required Fields are empty ...')
  setTimeout(function(){ btnReg.innerHTML='UPDATE'; }, 4000);
}else{ 
  $('html, body').animate({
    scrollTop: $("#player-register").offset().top -400
  }, 2000);

if(game == 'fn'){
  e.preventDefault();
  const newDataFN = {
    mouse: mouse.value
  };
  rootRefFN.child(user_name.value).update(newDataFN);

btnReg.innerHTML = 'SUCCESS';
$('#register-header').html('You have succesfully updated ' + user_name.value);
$('html, body').animate({
  scrollTop: $("#player-register").offset().top -400
}, 2000);
$('#reg-button').html('RETURN HOME');
$("#reg-button").attr("href", "./index");
setTimeout(function(){ btnReg.innerHTML='UPDATE'; }, 4000);



  
}else if(game == 'cs'){
  e.preventDefault();
  const newDataCS = {

  };
  rootRefCS.child(user_name.value).update(newDataCS);

btnReg.innerHTML = 'SUCCESS';
$('#register-header').html('You have succesfully updated ' + user_name.value);
$('html, body').animate({
  scrollTop: $("#player-register").offset().top -400
}, 2000);
$('#reg-button').html('RETURN HOME');
$("#reg-button").attr("href", "./index");
setTimeout(function(){ btnReg.innerHTML='UPDATE'; }, 4000);
  
}else{
  btnReg.innerHTML = 'ERROR';
  alert('No Game Was Selected ...')
  setTimeout(function(){ btnReg.innerHTML='UPDATE'; }, 4000);
}
  
}

});


    
function changeToUpperCase(t) {
  var eleVal = document.getElementById(t.id);
  eleVal.value= eleVal.value.toUpperCase().replace(/ /g,'');
};


