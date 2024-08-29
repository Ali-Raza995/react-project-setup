import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { createChatbot } from '../../store/chatbot/chatbot-slice';
import { RESPONSE_STATUS } from '../../constants';
import { ROUTE_CONSTANTS } from '../../routes/route-constants';

const Chatbot = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);
    const isLoading = useAppSelector((state) => state.loader.isLoading);
    const currentUser: any = localStorage.getItem('session') || {};
    const chatBotId = localStorage.getItem('chatbotId');
    const parsedUser = JSON.parse(currentUser);
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.clear();
        navigate('/login');
    };
    const handleCreateChatBot = async () => {
        if (!chatBotId) {
            const response = await dispatch(createChatbot({ userId: parsedUser?.userId }));
            if (response?.meta?.requestStatus === RESPONSE_STATUS.FULFILLED) {
                navigate(ROUTE_CONSTANTS.CREATE_ASSISTANT);
            }
        }
    };
    return (
        <div className="text-white p-8 flex flex-col gap-10 mt-1 w-full">
            <div className="flex justify-between w-full">
                <p className="text-xs ont-bold gradient-text">Welcome!</p>
                <p className="text-tertiary text-[14px] cursor-pointer" onClick={handleSignOut}>
                    Sign Out
                </p>
            </div>
            <div>
                <h2 className="font-normal text-xl text-tertiary">Your Chatbots</h2>
                <p className="text-gray-medium ">Here’s where you view and manage your custom chatbots</p>
            </div>
            <button
                onClick={handleCreateChatBot}
                className="w-72 h-64 lMob:w-full bg-dark-gray  flex justify-center items-center border-[#454545] loose-dotted-border  p-4 rounded-3xl"
            >
                {isLoading ? (
                    <div className="animate-spin-slow rounded-full h-6 w-6 border-4 border-dotted border-medium-gray"></div>
                ) : (
                    <div className="flex items-center flex-col gap-2">
                        <img src={'/assets/dialog.svg'} alt="" width={24} height={24} />
                        <p>{chatBotId ? `ChatbotId: ${chatBotId}` : 'Create a new chatbot'} </p>
                    </div>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
