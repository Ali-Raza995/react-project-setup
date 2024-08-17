import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';

const Signup = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleGoogleSignUp = () => {
        console.log('Google Sign Up');
    };
    return <AuthForm mode="SignUp" email={email} onEmailChange={handleEmailChange} onGoogleSignUp={handleGoogleSignUp} />;
};

export default Signup;
