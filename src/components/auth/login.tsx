import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';

const Login = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleGoogleSignUp = () => {
        console.log('Google Sign Up');
    };
    return <AuthForm email={email} onEmailChange={handleEmailChange} onGoogleSignUp={handleGoogleSignUp} />;
};

export default Login;
