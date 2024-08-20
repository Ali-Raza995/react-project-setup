import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import useSupabase from '../../hooks/useSupabase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const { sendMagicLink, loading, error } = useSupabase();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSignUpWithEmail = async () => {
        if (email) {
            try {
                const response = await fetch('http://localhost:5000/api/send-magic-link', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
    
                if (!response.ok) {
                    throw new Error('Failed to send magic link');
                }
    
                alert('Magic link sent successfully');
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to send magic link');
            }
        }
    }

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
