import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import { useDispatch } from 'react-redux';
import { signout } from './features/userSlice.js';
import { auth } from './firebase.js';

function Header() {
    const dispatch = useDispatch();

        
    const logout = () => {
        dispatch(signout());
        auth.signOut();
    }


    return (
        <div className= "header"> 
            <div className="header__left">
                <img src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png" alt="logo" />

                <div className="header__search">
                    <SearchIcon />
                    <input type = "text" />

                </div>
                
            </div>
            
            <div className="header__right">
                <HeaderOption Icon = {HomeIcon} title="Home" />
                <HeaderOption Icon = {SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon = {LocalMallIcon} title="Jobs" />
                <HeaderOption Icon = {ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar="https://pbs.twimg.com/profile_images/695267345/1135119368_Kakashi_400x400.jpg" title = "Me" onClick = {logout} />
            </div>
        </div>
    )
}

export default Header
