var provider = new firebase.auth.TwitterAuthProvider();




const login_btn = document.getElementById('twitter-login');


login_btn.addEventListener('click', e => {
    e.preventDefault();

    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = credential.accessToken;
      var secret = credential.secret;
  
      // The signed-in user info.
      var user = result.user;

      window.location.assign('./cast');
      // ...
    }).catch((error) => {
      console.log('ERROR BITCH')
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  
})