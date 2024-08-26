import React from 'react';

interface LoaderProps {
    progress: number;
}

const UploadProgress: React.FC<LoaderProps> = ({ progress }) => {
    return (
        <div className="border border-[#2F2F2F] flex items-center p-2 px-3 rounded-xl w-[calc(100vw-700px)]">
            <div className="text-white mb-2 whitespace-nowrap">Training chatbot...</div>
            <div className="w-full bg-gray-700 rounded-full dark:bg-gray-700">
                <div className="bg-soft-cyan h-2.5 rounded-full mx-2" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="text-white pl-4">{progress}%</div>
        </div>
    );
};

export default UploadProgress;
