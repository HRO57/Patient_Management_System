// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem('user'));
        if (loggeduser && input.email === loggeduser.email && input.password === loggeduser.password) {
            navigate("/home-page"); // Change this to your desired home page
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="login-container">
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        style={{ width: '100%' }}
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        style={{ width: '100%' }}
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
