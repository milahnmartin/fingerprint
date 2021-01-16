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


new_messageBTN.addEventListener('click', (e) => {
  e.preventDefault();
  $("#feed-chat").empty();

  var user = firebase.auth().currentUser;

  let user_feed_message = document.getElementById('message_text').value;

  rootRef.child(user.displayName).push({
    username: user.displayName,
    user_email: user.email,
    user_uid: user.uid,
   user_message: user_feed_message
 });
    

});



rootRef.on('value',data => {
  $("#feed-chat").empty();
    data.forEach((element) => {
     element.forEach(newE => {
        let feed_user = newE.val().username;
        let feed_message = newE.val().user_message;


        $('#feed-chat').append(
`<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  <!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="./assets/images/bluefinger.png" style="height:20px;width:20px" class="rounded me-2" alt="...">
      <strong class="me-auto">${feed_user}</strong>
      <small>few minutes ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" style="position:relative;right:-24px">
     ${feed_message}
    </div>
  </div>
</div>`
        );









     })
    

    });
})






