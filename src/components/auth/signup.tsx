import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import useSupabase from '../../hooks/useSupabase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const { sendMagicLink, loading, error } = useSupabase();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSignUpWithEmail = async () => {
        if (email) {
            navigate('/chatbot')
        }
    };

    const handleGoogleSignUp = () => {
        console.log('Google Sign Up');
    };

    return (
        <AuthForm
            mode="SignUp"
            email={email}
            onEmailChange={handleEmailChange}
            onEmailSubmit={handleSignUpWithEmail} 
            onGoogleSignUp={handleGoogleSignUp}
            loading={loading} 
            error={error} 
        />
    );
};

export default Signup;
