
const srchBTN = document.getElementById('search-q');
const database = firebase.database();

const rootRef = database.ref('users/FN');




function changeToUpperCase(t) {
  var eleVal = document.getElementById(t.id);
  eleVal.value= eleVal.value.toUpperCase().replace(/ /g,'');
}






srchBTN.addEventListener('click', (e) => {
      e.preventDefault();
      const input = document.getElementById('user-q').value;


      rootRef.orderByKey().on('value', snapshot => {
    
      if(typeof(snapshot.val()[input]) === 'object'){
        showData();
        const data = snapshot.val()[input];
        
        var player_name = document.getElementById('player-name').innerHTML = "We found this for " + input + " !";
        var dym_text = document.getElementById('dym').innerHTML = '';
        var dym_text = document.getElementById('player-dym').innerHTML = '';
        
          $('html, body').animate({
            scrollTop: $(".fa-desktop").offset().top +510
          }, 2000);
       document.getElementById('player-header-info').innerHTML = input + " Peripherals"
       document.getElementById('player-basic-info').innerHTML = data.info
        document.getElementById('monitor-info').innerHTML = data.monitor;
        document.getElementById('player-ping').innerHTML = data.ping;
        document.getElementById('player-mouse').innerHTML = data.mouse;
        document.getElementById('player-keyboard').innerHTML = data.keyboard;
        document.getElementById('player-headset').innerHTML = data.headset;
        if(data.controller === ''){
          document.getElementById('player-controller').innerHTML = 'none';
        }else{
          document.getElementById('player-controller').innerHTML = data.controller;
        }
        // platform info
        document.getElementById('player-platform-info').innerHTML = input + " Platform"
        document.getElementById('player-basic').innerHTML = input + " Platform Info"
        document.getElementById('player-ram').innerHTML = data.ram;
        document.getElementById('player-motherboard').innerHTML = data.mobo;
        document.getElementById('player-cpu').innerHTML = data.cpu;
        document.getElementById('player-gpu').innerHTML = data.gpu;

        // player team info
        document.getElementById('player-team-info').innerHTML = input + " Team"
        document.getElementById('team-basic').innerHTML = input + " Team Status and Contract Status"
        if(data.signed === 'none' || 'None' || ""){
          document.getElementById('player-team-status').innerHTML = 'Player Not Currently Signed';
          document.getElementById('player-team').innerHTML = 'Free Agent';
        }else{
          document.getElementById('player-team-status').innerHTML = 'Player Currently Signed';
          document.getElementById('player-team').innerHTML = data.signed;
        }
        
        
      }else{
        erroData();

        let player_dym_size = parseInt(input.length/2); 
        let player_dym = input.substring(0, player_dym_size);
       

        rootRef.orderByChild('name').startAt(player_dym).on('value', snapshot => {
          let dym = snapshot.val();
          let dymm = Object.keys(dym);
      
          var player_name = document.getElementById('player-name').innerHTML = "We couldn't find a player named " + input + " :(";
          var dym_text = document.getElementById('dym').innerHTML = 'Did you mean: ';
          if(typeof(dymm[1]) == 'undefined'){
            var dym_text = document.getElementById('player-dym').innerHTML = dymm[0];
          }else{
            var dym_text = document.getElementById('player-dym').innerHTML = dymm[0] + " or " + dymm[1];
          }
          
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