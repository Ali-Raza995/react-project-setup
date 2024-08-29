import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import { googleSignUp, login } from '../../store/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { RESPONSE_STATUS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useAppSelector((state) => state.loader.isLoading);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleEmailSubmit = async () => {
        if (email) {
            try {
                const response = await dispatch(login({ email }));
                if (response?.meta?.requestStatus === RESPONSE_STATUS.FULFILLED) {
                    navigate(`/check-email?email=${email}`);
                }
                setEmail('');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    const handleGoogleSignUp = async () => {
        try {
            dispatch(googleSignUp());
        } catch (error) {
            console.error('Error during Google signup:', error);
        }
    };

    return (
        <AuthForm
            mode="SignIn"
            fieldValue={email}
            handleChange={handleEmailChange}
            handleSubmit={handleEmailSubmit}
            onGoogleSignUp={handleGoogleSignUp}
            loading={isLoading}
        />
    );
};

export default Login;
