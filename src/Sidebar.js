import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';



function Sidebar() {
    
    const user = useSelector(selectUser);
    
    console.log(user);


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.adweek.com/wp-content/uploads/2020/03/behr-zoom-background-feature-2020-600x315.jpg" alt="" />
                <Avatar src={user.photoUrl} />
                <h2>{ user.displayName }</h2>
                <h4>{ user.email }</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className="right">Who viewed your profile</p>
                    <p className="sidebar__statNumber">100</p>
                </div>
                <div className="sidebar__stat">
                    <p>View Your Posts</p>
                    <p className="sidebar__statNumber">100</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>

                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>programming</p>
                </div>

                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>reactjs</p>
                </div>


                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>softwaredevelopment</p>
                </div>


                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>hiring</p>
                </div>


                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>datascience</p>
                </div>

            </div>
            
        </div>
    )
}

export default Sidebar
