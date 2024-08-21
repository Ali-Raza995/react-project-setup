import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import showToast from '../shared/toast';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSignUpWithEmail = async () => {
        if (email) {
            setLoading(true);
            try {
                const response: any = await fetch('http://localhost:5000/api/send-magic-link', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();
                if (!response.ok) {
                    showToast('error', data.message);
                } else {
                    showToast('success', data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
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
        />
    );
};

export default Signup;
