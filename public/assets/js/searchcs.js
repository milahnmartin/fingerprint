
const srchBTN = document.getElementById('search-q');
const database = firebase.database();

const rootRef = database.ref('users/CS');




function changeToUpperCase(t) {
  var eleVal = document.getElementById(t.id);
  eleVal.value= eleVal.value.toUpperCase().replace(/ /g,'');
}







srchBTN.addEventListener('click', (e) => {
const input = document.getElementById('user-q').value;


  rootRef.orderByKey().on('value', snapshot => {
    
      if(typeof(snapshot.val()[input]) === 'object'){
        showData();
        
        var player_name = document.getElementById('player-name').innerHTML = "We found this for " + input;
      }else{
        erroData();

        let player_dym_size = parseInt(input.length/2) + 1; 
        let player_dym = input.substring(0, player_dym_size);
       

        rootRef.orderByChild('name').startAt(player_dym).on('value', snapshot => {
          let dym = snapshot.val();
          let dymm = Object.keys(dym);
      
          var player_name = document.getElementById('player-name').innerHTML = "We couldn't find a player named " + input + " Did you mean " + dymm;
          });
          
        
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