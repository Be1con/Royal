import app from 'firebase';

const config = {
    apiKey: "AIzaSyBo8X8wy49depPwn_K8RcXYPPDERFddUqg",
    authDomain: "test-27239.firebaseapp.com",
    databaseURL: "https://test-27239.firebaseio.com",
    projectId: "test-27239",
    storageBucket: "test-27239.appspot.com",
    messagingSenderId: "556808780992",
    appId: "1:556808780992:web:67781fd6c9e380b0498125",
    measurementId: "G-QDL4JMY4C2"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;