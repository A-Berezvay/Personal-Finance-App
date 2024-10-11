// src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <p>This is a placeholder for the login page.</p>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
            <p>
                Already have an account? <Link to="/dashboard">Go to Dashboard</Link>
            </p>
        </div>
    );
};

export default Login;

