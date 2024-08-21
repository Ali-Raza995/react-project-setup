import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateChatbot = () => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        localStorage.removeItem('session');
        navigate('/login')
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
            <button className="w-72 h-64 lMob:w-full bg-dark  flex justify-center items-center border-[#454545] loose-dotted-border  p-4 rounded-3xl">
                <div className="flex items-center flex-col gap-2">
                    <img src={'/assets/dialog.svg'} alt="" width={24} height={24} />
                    <p>Create a new chatbot</p>
                </div>
            </button>
        </div>
    );
};

export default CreateChatbot;
