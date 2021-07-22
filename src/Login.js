import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin, signout } from './features/userSlice';
import { auth } from './firebase';

import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const dispatch = useDispatch();


    const login = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(signout({
                    email: userAuth.user.email,
                    displayName: userAuth.user.displayName,
                    uid: userAuth.user.uid,
                    profileUrl: userAuth.user.photoURL, 
            }))
        }).catch(err => alert(err));
    }

    const register = () => {
        if (name.length === 0) {
            alert("Please Enter Name!");
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: photoUrl
                }).then(() => {
                    dispatch(signin({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        name: name,
                        photoURL: photoUrl
                    }))
                })
        }).catch((error) => {alert(error)})
    }

    return (
        <div className="login">
            <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-png-transparent-background-1.png"
                alt=""
            />

            <form>
                <input type="text" placeholder="Full Name (required if registering)" value= {name} onChange = {(e)=>setName(e.target.value)} />
                <input type="text" placeholder="PhotoUrl (Optional)" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={login}>Sign In</button>
            </form>

            <p>
                Not Register? {" "}
                <span className="login__register" onClick= {register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
