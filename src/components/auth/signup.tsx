import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import showToast from '../shared/toast';
import { useNavigate } from 'react-router-dom';
import { googleSignUp, signup } from '../../store/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { RESPONSE_STATUS } from '../../constants';

const Signup = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useAppSelector((state) => state.loader.isLoading);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSignUpWithEmail = async () => {
        if (email) {
            try {
                const response = await dispatch(signup({ email }));
                if (response?.meta?.requestStatus === RESPONSE_STATUS.FULFILLED) {
                    navigate(`/check-email?email=${email}`);
                }
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
            mode="SignUp"
            fieldValue={email}
            handleChange={handleEmailChange}
            handleSubmit={handleSignUpWithEmail}
            onGoogleSignUp={handleGoogleSignUp}
            loading={isLoading}
        />
    );
};

export default Signup;
