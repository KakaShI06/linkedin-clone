import React, { useEffect } from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signin, signout } from './features/userSlice.js';
import Login from './Login.js';
import { auth } from './firebase.js';
import Widget from './Widget.js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(signin({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(signout());
      }
    })


    

  }, [])

  return (
    <div className="app">
      <Header />
      
      {!user ? (<Login />)
        : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
      )}
      


    </div>
  );
}

export default App;
