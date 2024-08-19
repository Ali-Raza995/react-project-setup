import React from 'react';
import Sidebar from '../../components/layout/sidebar';
import CreateChatbot from '../../components/chatbot/create-chatbot';

const Chatbot = () => {
    return (
        <div className="text-white flex">
            <Sidebar />
            <CreateChatbot />
        </div>
    );
};

export default Chatbot;
