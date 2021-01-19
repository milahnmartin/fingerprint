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

let user_photo = user.photoURL;

  rootRef.push({
    username: user.displayName,
    user_email: user.email,
    user_uid: user.uid,
    user_time: current_day,
    user_likes: 0,
    user_photo:user_photo,
   user_message: user_feed_message
 });
    
 $('html, body').animate({
  scrollTop: $("#testimon").offset().top -750
}, 2000);


$('#message_text').val("");
});

const printFeed = () => {



rootRef.on('value',data => {
  $("feed-ui").empty();
    data.forEach((element) => {
        let feed_user = element.val().username;
        let feed_message = element.val().user_message;
        let feed_time = element.val().user_time;
        let feed_likes = element.val().user_likes;
        let feed_photo = element.val().user_photo;

        $('#feed-ui').append(
          `
<div class="event">
    <div class="label">
      <img src="${feed_photo}">
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
          <i class="like icon" id="likes"></i> ${feed_likes} Likes
        </a>
      </div>
    </div>
  </div>
`
        );



    });
})


};




printFeed();



