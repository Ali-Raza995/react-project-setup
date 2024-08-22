import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import showToast from '../shared/toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
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
                    setEmail('');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };
    const handleGoogleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/signup/google');
            const data = await response.json();
            console.log('data', data)
            showToast('success', data.message)

            if (data.data.url) {
                window.location.href = data.data.url; 
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error during Google signup:', error);
        }
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
