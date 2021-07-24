const { admin, db } = require('./utils/admin')
const functions = require('firebase-functions');
const app = require('express')();//initializaing the app
const firebaseConfig = require('./utils/config')
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);// Initializing Firebase
const { signIn,signUp,resetPassword } = require('./handlers/auth');

app.post('/register',signUp);
app.post('/login',signIn);
exports.api=functions.https.onRequest(app);//this will add api prefix to our url and gives api url like https://us-central1-parkit-27a48.cloudfunctions.net/api