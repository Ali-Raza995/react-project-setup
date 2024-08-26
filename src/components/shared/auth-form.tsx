import React from 'react';
import CommonButton from '../shared/button';
import CommonInputField from '../shared/customer-input';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
    mode?: string;
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailSubmit: () => void;
    onGoogleSignUp?: () => void;
    loading?: boolean;
    error?: string | null;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = 'SignUp', email, onEmailChange, onEmailSubmit, onGoogleSignUp, loading, error }) => {
    const navigate = useNavigate();

    const formTitle = mode === 'SignUp' ? 'Sign in' : 'Sign up';
    const googleAuthTitle = mode === 'SignUp' ? 'Sign up' : 'Sign in';
    const pageTitle = mode === 'SignUp' ? 'Welcome to Specter' : 'Log in to Specter';

    const handleNavigation = () => {
        if (mode == 'SignUp') {
            navigate('/login');
        } else {
            navigate('/signup');
        }
    };

    return (
        <>
            <div className="flex justify-between p-6 items-center ">
                <img src="/assets/specter-logo.svg" alt="Specter Logo" />
                <div className="flex items-center gap-1">
                    <img src="/assets/user.svg" alt="User Icon" />
                    <p className="text-tertiary text-[14px] cursor-pointer" onClick={handleNavigation}>
                        {formTitle}
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="_bg-vector flex flex-col items-center mt-14 lMob:px-2 max-w-[30rem] w-full p-8">
                    <p className="text-tertiary text-3xl">{pageTitle}</p>
                    <div className="text- text-center text-base mt-4">
                        {mode === 'SignUp' ? (
                            <>
                                <p>We’re looking forward to having you as an early adopter.</p>
                                <p>Let’s create your account to get started.</p>
                            </>
                        ) : (
                            <p>Welcome back. We appreciate you being an early adopter.</p>
                        )}
                    </div>

                    <div className="mt-6 w-[24rem] flex flex-col gap-8 lMob:px-6 mMob:px-12 ">
                        <CommonButton text={`${googleAuthTitle} with Google`} onClick={onGoogleSignUp} icon="/assets/google-logo.svg" />
                        <div className="flex items-center justify-between">
                            <span className="w-full h-px bg-gray"></span>
                            <span className="px-4 text-gray text-xs whitespace-nowrap">Or, continue with email</span>
                            <span className="w-full h-px bg-gray"></span>
                        </div>
                        <CommonInputField
                            placeholder="Your email address"
                            value={email}
                            onChange={onEmailChange}
                            placeholderColor="text-gray"
                        />
                        <CommonButton text={mode === 'SignUp' ? 'Create Account' : 'Continue'} onClick={onEmailSubmit} loading={loading}/>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthForm;
