// src/pages/Register.js
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register Page</h2>
            <p>This is a placeholder for the registration page.</p>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
            <p>
                After registering, <Link to="/dashboard">Go to Dashboard</Link>
            </p>
        </div>
    );
};

export default Register;

