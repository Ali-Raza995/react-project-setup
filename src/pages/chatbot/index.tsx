import React from 'react';
import Sidebar from '../../components/layout/sidebar';
import CreateChatbot from '../../components/chatbot/create-chatbot';

const Chatbot = () => {
    return (
        <div className="text-white flex lMob:flex-col">
            <Sidebar />
            <CreateChatbot />
        </div>
    );
};

export default Chatbot;
