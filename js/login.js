 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

 import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyAPsksv8RAmjEZI-VScGCoZ70dnG-HtQFA",
   authDomain: "rapid-rentals-e8019.firebaseapp.com",
   projectId: "rapid-rentals-e8019",
   storageBucket: "rapid-rentals-e8019.appspot.com",
   messagingSenderId: "881589718188",
   appId: "1:881589718188:web:5edfa3e82a19f771736309",
   measurementId: "G-0SNGFCZVPM"
 };
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const auth = getAuth(app);
    auth.languageCode = 'en';

    

const emaillogin = document.getElementById('emaillogin');
emaillogin.addEventListener("click", function(){
   
   const email = document.getElementById('inputemail').value;
   const password = document.getElementById('inputpassword').value;
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   
});

    
 
 const googlelogin = document.getElementById('signinwithgoogle');
 googlelogin.addEventListener("click", function(){
   const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log(user);
    window.location.href = "logged.html";

    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
     });
 });


 const facebooklogin = document.getElementById('signinwithfacebook');
 facebooklogin.addEventListener("click", function(){
   const provider = new FacebookAuthProvider();
   signInWithPopup(auth, provider)
   .then((result) => 
   {
   const user = result.user;
   const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

   })

   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
   });

});
