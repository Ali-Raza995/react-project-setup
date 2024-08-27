import React, { useState } from 'react';
import RecommendedDocuments from './recommended-documents';
import UploadProgress from '../../shared/upload-progress';
import { recommendedDocumentsData } from '../../../data';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    uploadProgress: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, uploadProgress }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileSelect(file);
        }
    };

    return (
        <>
            <div className="mt-8">
                <p className="text-[20px] text-tertiary lMob:text-lg">Upload documents</p>
                <p className="text-medium-gray lMob:text-xs">
                    Add documents with any information that will help your chat assistant answer questions about your services and
                    offerings.
                </p>
            </div>
            <div className="grid grid-cols-10 gap-6">
                <div className="col-span-6 tab:col-span-10">
                    <div className="flex flex-col items-center justify-center w-full h-[400px] border-2 border-dashed border-dark-gray rounded-xl bg-gray-900 text-white cursor-pointer mt-6 p-[36px] ">
                        <input type="file" accept=".txt,.doc,.docx,.pdf" onChange={handleFileChange} className="hidden" id="file-upload" />
                        <label htmlFor="file-upload" className="flex flex-col gap-4 items-center justify-center h-full w-full">
                            <img src="/assets/upload.svg" alt="Upload Logo" />
                            <p className="text-lg text-tertiary lMob:text-xs lMob:whitespace-nowrap">
                                Drag and drop, or select your files to upload
                            </p>
                            <p className="text-sm text-[#858585] lMob:text-xs lMob:whitespace-nowrap">
                                Supported file types: .txt, .doc, .pdf
                            </p>
                        </label>
                    </div>
                </div>
                <div className="col-span-3 tab:col-span-10">
                    <RecommendedDocuments recommendations={recommendedDocumentsData} />
                </div>
            </div>

            <div className="flex items-center mt-12 lMob:flex-col-reverse lMob:gap-6">
                <div className=" max-w-[220px] lMob:max-w-full w-full">
                    <button className="bg-charcoal-gray hover:bg-gray-600 text-white py-3 px-6 rounded-[190px]">
                        {' '}
                        <span className="text-[20px]"> + </span> Create assistant
                    </button>
                </div>
                {uploadProgress > 0 && (
                    <div className="w-full">
                        <UploadProgress progress={uploadProgress} />
                    </div>
                )}
            </div>
        </>
    );
};

export default FileUpload;
