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
    console.log('mode', mode);
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
                <img src="/assets/specter.svg" alt="Specter Logo" />
                <div className="flex items-center gap-1">
                    <img src="/assets/user.svg" alt="User Icon" />
                    <p className="text-tertiary text-[14px] cursor-pointer" onClick={handleNavigation}>{mode === 'SignUp' ? 'Sign in' : 'Sign up'}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="_bg-vector flex flex-col items-center mt-14 lMob:px-2 max-w-[30rem] w-full p-8">
                    <p className="text-tertiary text-3xl">Welcome to Specter</p>
                    <div className="text-light_grey text-center text-base mt-4">
                        <p>We’re looking forward to having you as an early adopter.</p>
                        <p>Let’s create your account to get started.</p>
                    </div>

                    <div className="mt-6 w-[24rem] flex flex-col gap-8 lMob:px-6 mMob:px-12 ">
                        <CommonButton text="Sign up with Google" onClick={onGoogleSignUp} icon="/assets/google-logo.svg" />
                        <div className="flex items-center justify-between">
                            <span className="w-full h-px bg-custom_gray"></span>
                            <span className="px-4 text-custom_gray text-xs whitespace-nowrap">Or, continue with email</span>
                            <span className="w-full h-px bg-custom_gray"></span>
                        </div>
                        <CommonInputField
                            placeholder="Your email address"
                            value={email}
                            onChange={onEmailChange}
                            placeholderColor="text-custom_gray"
                        />
                        <CommonButton text={mode === 'SignUp' ? 'Sign Up' : 'Sign up'} onClick={onEmailSubmit} />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthForm;
