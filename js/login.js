 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

 import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
 const provider = new GoogleAuthProvider();

 const googlelogin = document.getElementById('signinwithgoogle');
 googlelogin.addEventListener("click", function(){
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
 })
