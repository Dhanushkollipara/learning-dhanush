import React from 'react';

const UserMenu = ({ setLoggedIn }) => {

    return (
        <div >
            <h2>User Menu</h2>
            <ul>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#About">User Info</a></li>
            </ul>
            <button onClick={() => {
        setLoggedIn(false)}}>Logout</button>
        </div>
    );
};

export default UserMenu;
