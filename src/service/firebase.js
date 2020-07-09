import firebase from "firebase/app"
import "firebase/storage"
import {FirebaseCredential as config} from'./../jsconfig'


const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage, firebase as default};