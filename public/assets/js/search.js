
const srchBTN = document.getElementById('search-q');
const database = firebase.database();
const rootRefCS = database.ref('users/CS');
const rootRefFN = database.ref('users/FN');











srchBTN.addEventListener('click', (e) => {
const input = document.getElementById('user-q').value;


  rootRefFN.orderByKey().on('value', snapshot => {
    
      if(typeof(snapshot.val()[input]) === 'object'){
        showData();
        var player_name = document.getElementById('player-name').innerHTML = "We found this for " + input;
      }else{
        erroData();
        var player_name = document.getElementById('player-name').innerHTML = "We couldn't find a player name called " + input;
      }
      
  
  
  });




});

 

function showData(){
$(function(){
$('.waiting').css('display','initial');
$('#search-q').html('SUCCESS')
setTimeout(function() { 
  $('#search-q').html('SEARCH')
}, 5000);
});
};

function erroData(){
  $(function(){
    $('#search-q').html('ERROR')
    setTimeout(function() { 
      $('#search-q').html('SEARCH')
    }, 5000);
  });
}