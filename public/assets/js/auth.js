const auth = firebase.auth();



const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(googleProvider)
  .then(()=>{
    window.location.assign('./update');
  })
  .catch((error)=>{
    console.log(error);
  })
};





const signInWithTwitter = () => {
  const twitterProvider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(twitterProvider)
.then( ()=>{
  window.location.assign('./update');
})
.catch((error)=>{
  console.log(error);
})
};


