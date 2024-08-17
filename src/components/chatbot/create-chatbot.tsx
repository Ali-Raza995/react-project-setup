import React from 'react';

const CreateChatbot = () => {
    return (
        <div className="text-white p-8 flex flex-col gap-12">
            <p className="text-lg ont-bold gradient-text">Welcome!</p>
            <div>
                <h2 className="font-normal text-xl">Your Chatbots</h2>
                <p className="text-light_grey">Here’s where you view and manage your custom chatbots</p>
            </div>
            <button className="w-72 h-64 bg-secondary rounded-3xl flex justify-center items-center border border-light_grey border-dotted">
                <div className="flex items-center flex-col gap-2">
                    <img src={'/assets/dialog.svg'} alt="" width={24} height={24} />
                    <p>Create a new chatbot</p>
                </div>
            </button>
        </div>
    );
};

export default CreateChatbot;
