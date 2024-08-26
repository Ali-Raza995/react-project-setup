import React, { useState } from 'react';
import CommonButton from '../../shared/button';
import { buttonData } from '../../../data/upload-file-buttons';
import { ButtonData } from '../../../types';
import UploadFiles from './upload-files';
import WebsiteUrl from './webiste-url';
import FreeFromText from './free-form-text';

const CreateChatBot: React.FC = () => {
    const [uploadProgress, setUploadProgress] = useState(0);


    const [activeButton, setActiveButton] = useState<string | null>('upload-files');

    const simulateUploadProgress = () => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 200);
    };

    const handleFileSelect = (file: File) => {
        console.log('File selected:', file);
        simulateUploadProgress();
    };
    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="text-light-gray p-8 flex flex-col gap-10 mt-1 w-full">
            <div className="flex w-full gap-1 text-xs">
                <p>Chatbots</p>
                <img src="/assets/arrow-left.svg" alt="" />
                <p>Create an assistant</p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <h1 className="text-3xl text-tertiary">Let’s start by adding to the knowledge base</h1>
                <p className="text-sm">
                    Your assistant will train on these data sources and utilize this knowledge when responding to your potential clients.
                </p>
                <div className="flex gap-4 max-w-[30rem] mt-6">
                    {buttonData.map((button: ButtonData) => (
                        <CommonButton
                            key={button.id}
                            text={button.text}
                            height="h-10"
                            hoverStyles="hover:bg-soft-cyan hover:text-black"
                            activeStyles="bg-soft-cyan"
                            isActive={activeButton === button.id}
                            onClick={() => handleButtonClick(button.id)}
                        />
                    ))}
                </div>

                <div>
                    {activeButton == 'upload-files' && <UploadFiles onFileSelect={handleFileSelect} uploadProgress={uploadProgress} />}
                    {activeButton == 'website-urls' && <WebsiteUrl />}
                    {activeButton == 'freeform-text' && <FreeFromText />}
                </div>
            </div>
        </div>
    );
};

export default CreateChatBot;
