import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure you import the CSS file

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">TypeScript App</h1>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/home" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/todo" className="navbar-link">Todo</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/counter" className="navbar-link">Counter</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/params/Hello Dhanush" className="navbar-link">Params</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
