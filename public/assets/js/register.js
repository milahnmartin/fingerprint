
const user_name = document.getElementById('name');
const ping = document.getElementById('ping')
const signed = document.getElementById('signed');
const btnReg = document.getElementById('submit');



const database = firebase.database();
const rootRefCS = database.ref('users/CS');
const rootRefFN = database.ref('users/FN');




btnReg.addEventListener('click', (e) => {

var game = $("input:radio[name ='inlineRadioOptions']:checked").val();
if(user_name.value == ""){
  btnReg.innerHTML = 'ERROR';
  alert('Required Fields are empty ...')
  setTimeout(function(){ btnReg.innerHTML='REGISTER'; }, 4000);
}else{ 
  $('html, body').animate({
    scrollTop: $("#player-register").offset().top -400
  }, 2000);

if(game == 'fn'){
  e.preventDefault();
  rootRefFN.child(user_name.value).set({
    name: user_name.value,
    ping: ping.value,
    signed: signed.value
});

btnReg.innerHTML = 'SUCCESS';
$('#register-header').html(user_name.value + ' You have succesfully registered for Fortnite !');
$('html, body').animate({
  scrollTop: $("#player-register").offset().top -400
}, 2000);
$('#reg-button').html('GIVE MORE DETAIL');
$("#reg-button").attr("href", "./detail-register");
setTimeout(function(){ btnReg.innerHTML='REGISTER'; }, 4000);



  
}else if(game == 'cs'){
  e.preventDefault();
  rootRefCS.child(user_name.value).set({
    name: user_name.value,
    ping: ping.value,
    signed: signed.value
});

btnReg.innerHTML = 'SUCCESS';
$('#register-header').html(user_name.value + ' You have succesfully registered for CS:GO !');
$('html, body').animate({
  scrollTop: $("#player-register").offset().top -400
}, 2000);
$('#reg-button').html('GIVE MORE DETAIL');
$("#reg-button").attr("href", "./detail-register");
setTimeout(function(){ btnReg.innerHTML='REGISTER'; }, 4000);
  
}else{
  btnReg.innerHTML = 'ERROR';
  alert('No Game Was Selected ...')
  setTimeout(function(){ btnReg.innerHTML='REGISTER'; }, 4000);
}
  
}

});


    
function changeToUpperCase(t) {
  var eleVal = document.getElementById(t.id);
  eleVal.value= eleVal.value.toUpperCase().replace(/ /g,'');
}


