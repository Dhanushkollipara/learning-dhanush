import React, { useState } from 'react';
const Login = ({ setLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div >
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={() => {
            setLoggedIn(true);
    }}>Login</button>
        </div>
    );
};

export default Login;
