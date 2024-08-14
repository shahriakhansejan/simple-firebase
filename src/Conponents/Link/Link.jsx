import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';

const Link = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            setUser(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleLogOut = () =>{
        signOut(auth)
        .then(result => {
            setUser(null);
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return ( 
        <div>
            {
                user?
                <button onClick={handleLogOut}>Log Out</button> :
            <div>
                <button onClick={handleGoogleSignIn}>Google LogIn</button>
                <button onClick={handleGithubSignIn}>Github LogIn</button>
            </div>
            }


            {
                user &&
                <div>
            <img src={user.photoURL} alt="" />
                <h2>
                {user.displayName}
                </h2>
                Email: {user.email}
            </div>
            }

            
        </div>
    );
};

Link.propTypes = {
    
};

export default Link;