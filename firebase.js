import firebase from 'firebase';

let config = {
        apiKey: "AIzaSyBvkPqREuAICwjcLWrZgAKG4WysGFjrqp4",
        authDomain: "portfolio-form-b8a48.firebaseapp.com",
        projectId: "portfolio-form-b8a48",
        storageBucket: "portfolio-form-b8a48.appspot.com",
        messagingSenderId: "220700032715",
        appId: "1:220700032715:web:763ab6507324b06739654e"
};
    
export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
