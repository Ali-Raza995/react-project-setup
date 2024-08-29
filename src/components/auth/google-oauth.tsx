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
                showToast('success', 'User Logged In Successfully');
                navigate('/create-chatbot');
            } else {
                navigate('/login');
            }
        };
        checkSession();
    }, []);

    return <div></div>;
};

export default OAuthCallback;
