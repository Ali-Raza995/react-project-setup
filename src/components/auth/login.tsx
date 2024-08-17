import React from 'react';
import CommonButton from '../shared/button';

const Login = () => {
    const handleGoogleSignUp = () => {
        console.log('Google Sign Up');
    };
    return (
        <div className="bg-primary h-screen flex flex-col items-center justify-center">
            <p className="text-tertiary text-3xl">Welcome to Spector</p>
            <div className="text-light_grey text-center text-base mt-4">
                <p>We’re looking forward to have you as an early adopter.</p>
                <p>Let’s create your account to get started.</p>
            </div>

            <div className="mt-6">
                <CommonButton text="Sign up with Google" onClick={handleGoogleSignUp} width="w-[30rem]" icon={"/public/assets/google-logo.svg"} />
            </div>
        </div>
    );
};

export default Login;
