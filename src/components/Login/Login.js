import React, { useContext } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/' } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result)
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email }
                storeAuthToken();
                setLoggedInUser(signedInUser);


            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorCode, errorMessage, email);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                console.log(idToken);
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch((error) => {
                // Handle error
            });
    }
    return (
        <div>
            <Button variant="outline-primary" onClick={handleGoogleSignIn}>Continue with Google</Button>
        </div>
    );
};

export default Login;