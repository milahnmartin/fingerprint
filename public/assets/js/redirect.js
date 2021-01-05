const csBTN = document.getElementById('cs-click');
const fnBTN = document.getElementById('fn-click');



fnBTN.addEventListener('click',() => {
  window.location.assign('./fortnite');
  });

  csBTN.addEventListener('click',() => {
    window.location.assign('./csgo');
    });
  
    $("#goto-players").click(function() {
      $('html, body').animate({
          scrollTop: $("#za-finger").offset().top -400
      }, 2000);
  });

  $("#goto-teams").click(function() {
    $('html, body').animate({
        scrollTop: $("#za-finger").offset().top -400
    }, 2000);
});


$("#goto-titles").click(function() {
  $('html, body').animate({
      scrollTop: $("#za-finger").offset().top -400
  }, 2000);
});


