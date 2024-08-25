import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase-client';
import showToast from '../shared/toast';

const OAuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { session }
            } = await supabase.auth.getSession();
            if (session) {
                localStorage.setItem('session', JSON.stringify(session));
                console.log('Session:', session);
                showToast('success', 'User Logged In Successfully');
                navigate('/chatbot');
            } else {
                console.error('No session found');
                navigate('/login');
            }
        };
        checkSession();
    }, []);

    return <div></div>;
};

export default OAuthCallback;
