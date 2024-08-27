import React from 'react';

interface LoaderProps {
    progress: number;
}

const UploadProgress: React.FC<LoaderProps> = ({ progress }) => {
    return (
        <div className="border border-[#2F2F2F] flex items-center p-2 px-3 rounded-xl w-full  transition-all duration-300 ease-in-out lMob:flex-col lMob:items-start lMob:gap-1">
            <div className="text-white mb-2 whitespace-nowrap lMob:text-xs">Training chatbot...</div>
            <div className="w-full bg-gray-700 rounded-full dark:bg-gray-700">
                <div 
                    className="bg-soft-cyan h-2.5 rounded-full mx-2 lMob:mx-0 transition-all duration-300 ease-in-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="text-white pl-4 lMob:pl-0">{progress}%</div>
        </div>
    );
};

export default UploadProgress;
