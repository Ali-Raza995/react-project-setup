import React, { useState } from 'react';
import AuthForm from '../shared/auth-form';
import showToast from '../shared/toast';
import { login } from '../../store/auth/auth-slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { RESPONSE_STATUS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoading = useAppSelector((state) => state.loader.isLoading);
    console.log('isLoading', isLoading)
    const [email, setEmail] = useState('');


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleEmailSubmit = async () => {
        if (email) {
            try {
                const response = await dispatch(login({ email }));
                if(response?.meta?.requestStatus === RESPONSE_STATUS.FULFILLED) {
                    navigate(`/check-email?email=${email}`)
                    
                }
                console.log('response', response)
                setEmail('');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <AuthForm mode="SignIn" fieldValue={email} handleChange={handleEmailChange} handleSubmit={handleEmailSubmit} loading={isLoading} />
    );
};

export default Login;
