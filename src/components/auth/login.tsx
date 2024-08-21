import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import showToast from '../shared/toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        if (email) {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const data: any = await response.json();
                if (!response.ok) {
                    showToast('error', data.message);
                } else {
                    showToast('success', data.message);
                    setEmail('')
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return <AuthForm mode="SignIn" email={email} onEmailChange={handleEmailChange} onEmailSubmit={handleEmailSubmit} loading={loading} />;
};

export default Login;
