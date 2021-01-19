const database = firebase.database();
const rootRef = database.ref('feed');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      const welcome_user = document.getElementById('feed-name').innerHTML = "Logged in As " + user.displayName;
    //   rootRef.child(user.displayName).set({
    //     username: user.displayName,
    //     user_email: user.email,
    //     user_uid:   user.uid,
    //     user_photo: user.photoURL
    //  });
    
   
      // ...
    } else {
      window.location.assign('./feed-login');
    }
  });
  
const new_messageBTN = document.getElementById('new_message');

var current_day = new Date();

new_messageBTN.addEventListener('click', (e) => {
  e.preventDefault();
  $("#feed-ui").empty();

  var user = firebase.auth().currentUser;

  let user_feed_message = document.getElementById('message_text').value;
let current = new Date();
let current_day = current.toLocaleString();


  rootRef.push({
    username: user.displayName,
    user_email: user.email,
    user_uid: user.uid,
    user_time: current_day,
   user_message: user_feed_message
 });
    
 $('html, body').animate({
  scrollTop: $("#testimon").offset().top -750
}, 2000);
});

const printFeed = () => {



rootRef.on('value',data => {
  $("feed-ui").empty();
    data.forEach((element) => {
        let feed_user = element.val().username;
        let feed_message = element.val().user_message;
        let feed_time = element.val().user_time

        $('#feed-ui').append(
          `
<div class="event">
    <div class="label">
      <img src="./assets/images/bluefinger.png">
    </div>
    <div class="content">
      <div class="summary">
        <a>${feed_user}</a> posted on this page
        <div class="date">
          ${feed_time}
        </div>
      </div>
      <div class="extra text">
       ${feed_message}
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 0 Likes
        </a>
      </div>
    </div>
  </div>
`
        );



    });
})


}


printFeed();


