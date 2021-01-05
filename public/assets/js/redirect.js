const csBTN = document.getElementById('cs-click');
const fnBTN = document.getElementById('fn-click');



fnBTN.addEventListener('click',() => {
  window.open('https://fingerprint-za.web.app/fortnite');
  });

  csBTN.addEventListener('click',() => {
    window.open('https://fingerprint-za.web.app/csgo');
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


