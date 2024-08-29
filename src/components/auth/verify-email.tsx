import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUser } from '../../store/auth/auth-slice';
import { useAppDispatch } from '../../store/store';

interface SessionData {
    session: {
        access_token: string;
        expires_in: number;
        refresh_token: string;
        token_type: string;
        user: {
            id: string;
            email: string;
            [key: string]: any;
        };
        [key: string]: any;
    };
}

const VerifyMagicLink: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get<SessionData>(`http://localhost:5000/api/verify-magic-link?token=${token}`);
                localStorage.setItem('session', JSON.stringify(response.data.session));
                dispatch(setUser(response.data.session));
                setLoading(false);
                setVerified(true);

                const countdownInterval = setInterval(() => {
                    setCountdown((prevCountdown) => {
                        if (prevCountdown === 1) {
                            clearInterval(countdownInterval);
                            navigate('/create-chatbot');
                        }
                        return prevCountdown - 1;
                    });
                }, 2000);
            } catch (error) {
                setLoading(false);
                console.log('error', error);
            } finally {
                setLoading(false);
            }
        };
        if (token) {
            verifyToken();
        }
    }, [token]);

    return (
        <>
            <div className="flex justify-between p-6 items-center">
                <img src="/assets/specter-logo.svg" alt="Specter Logo" />
            </div>
            <div className="flex flex-col justify-center h-[90vh] text-white">
                {loading ? (
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
                        <p className="mt-4 text-2xl">Verifying...</p>
                    </div>
                ) : verified ? (
                    <div className="flex flex-col items-center">
                        <svg className="h-24 w-24 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M19 12A7 7 0 1 1 5 12a7 7 0 0 1 14 0z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="mt-4 text-2xl">Verified!</p>
                        <p className="mt-2 text-xl">Redirecting in {countdown}...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <svg className="h-24 w-24 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7v6M12 17h.01"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="mt-4 text-2xl">Verification Failed</p>
                        <p className="mt-2 text-xl">Please try again.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default VerifyMagicLink;
