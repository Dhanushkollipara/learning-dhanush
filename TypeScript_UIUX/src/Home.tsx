import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setMessage('Fill both Username and Password');
      return;
    }
    // Simulate a successful login
    setMessage('Successfully Logged In');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
      {message && <p className={message.startsWith('Fill') ? 'error-message' : 'success-message'}>{message}</p>}
    </div>
  );
};

export default Home;
