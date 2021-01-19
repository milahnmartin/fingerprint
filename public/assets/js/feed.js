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
  
// const new_messageBTN = document.getElementById('new_message');


// new_messageBTN.addEventListener('click', (e) => {
//   e.preventDefault();
//   $("#feed-chat").empty();

//   var user = firebase.auth().currentUser;

//   let user_feed_message = document.getElementById('message_text').value;

//   rootRef.push({
//     username: user.displayName,
//     user_email: user.email,
//     user_uid: user.uid,
//    user_message: user_feed_message
//  });
    

// });

const printFeed = () => {



rootRef.on('value',data => {
  $("fingerprint-social-feed").empty();
    data.forEach((element) => {
        let feed_user = element.val().username;
        let feed_message = element.val().user_message;

        $('#fingerprint-social-feed').append(
`<div class="card text-center">
<div class="card-header">
  <img src="./assets/images/bluefinger.png" style="width:33px;height:33px">
</div>
<div class="card-body">
  <h5 class="card-title">${feed_user}</h5>
  <p class="card-text">${feed_message}</p>
  <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
</div>
<div class="card-footer text-muted">
  seconds ago
</div>
</div>`
        );



    });
})


}


printFeed();


async function doIt(){
  return 'Hi'
};
console.log(doIt().then((e)=>{
  console.log(e)
}))
