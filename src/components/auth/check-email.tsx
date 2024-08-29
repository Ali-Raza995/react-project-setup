import React from 'react';

const CheckEmail: React.FC = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    console.log('email', email)

    return (
        <>
            <div className="flex justify-between p-6 items-center">
                <img src="/assets/specter-logo.svg" alt="Specter Logo" />
            </div>
            <div className="flex flex-col justify-center items-center min-h-[70vh] h-full">
                <img src="/assets/spector-icon.svg" alt="specter logo" />
                <h2 className="text-3xl text-tertiary mt-6">Check your email</h2>
                <div className="text-medium-gray text-sm text-center my-4">
                    <p>
                        You're all set! A link has been sent to <span className="text-white">{email}</span>
                    </p>
                    <p>Click it to log in and begin your journey with Specter</p>
                </div>
            </div>
        </>
    );
};

export default CheckEmail;
