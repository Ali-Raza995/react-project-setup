import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import useSupabase from '../../hooks/useSupabase';
import { supabase } from '../../lib/supabase-client';

const Login = () => {
    const [email, setEmail] = useState('');
    const { loading, error } = useSupabase();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        if (email) {
            await signInWithEmail();
        }
    };

    async function signInWithEmail() {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email,
                options: {
                    shouldCreateUser: true, // Set to true if you want to create a user if they don't exist
                    emailRedirectTo: 'http://localhost:5173/dashboard', // Redirect after email verification
                }
            });
    
            if (error) {
                throw error;
            }
    
            // Handle the response data
            console.log('Data', data);
            // You can use cookies or localStorage here to store any tokens or user info if needed.
        } catch (err: any) {
            console.error('Error', err.message);
        }
    }

    return (
        <AuthForm
            mode="SignIn" // Pass 'SignIn' to distinguish from SignUp
            email={email}
            onEmailChange={handleEmailChange}
            onEmailSubmit={handleEmailSubmit}
            loading={loading}
            error={error}
        />
    );
};

export default Login;
