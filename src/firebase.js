import firebase from 'firebase';
import { Actions, Effect } from 'jumpsuit'

var firebase_initialize = false;

var config = {
    apiKey: "AIzaSyCQeYprqShraJMIdjl-AzMISLASCkyB7BA",
    authDomain: "the-project-fae83.firebaseapp.com",
    databaseURL: "https://the-project-fae83.firebaseio.com"
};

export function initializeFirebase(){
    if(firebase_initialize){
        return;
    }
    firebase.initializeApp(config)
    firebase_initialize = true;

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            Actions.setUser(user);
            Actions.setUserName(user.displayName)
        }
        else{
            Actions.setUser('');
        }
    })
}

Effect('googleLogin', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        Actions.setUser(result.user);
    })
})
Effect('googleLogout', () => {
    Actions.setUser('');
    Actions.setUserName('');
})