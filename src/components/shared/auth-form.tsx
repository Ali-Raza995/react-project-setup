import React from 'react';
import CommonButton from '../shared/button';
import CommonInputField from '../shared/customer-input';

interface AuthFormProps {
    mode?: string;
    email: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailSubmit: () => void;
    onGoogleSignUp?: () => void;
    loading?: boolean;
    error?: string | null;
}

const AuthForm: React.FC<AuthFormProps> = ({
    mode = 'SignUp',
    email,
    onEmailChange,
    onEmailSubmit,
    onGoogleSignUp,
    loading,
    error,
}) => {
    const btnText = mode === 'SignUp' ? 'Sign up' : 'Sign in';

    return (
        <>
            <div className="flex justify-between p-6 items-center">
                <img src="/assets/specter.svg" alt="" />
                <div className="flex items-center gap-1">
                    <img src="/assets/user.svg" alt="" />
                    <p className="text-tertiary text-[14px] cursor-pointer">{btnText}</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-20 lMob:px-2">
                <p className="text-tertiary text-3xl">Welcome to Spector</p>
                <div className="text-light_grey text-center text-base mt-4">
                    <p>We’re looking forward to having you as an early adopter.</p>
                    <p>Let’s create your account to get started.</p>
                </div>

                <div className="mt-6 w-[24rem] flex flex-col gap-8 lMob:px-6 mMob:px-12">
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
                    <CommonButton
                        text={loading ? 'Sending...' : btnText}
                        onClick={onEmailSubmit}
                        // disabled={loading} // Disable the button while loading
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </>
    );
};

export default AuthForm;
