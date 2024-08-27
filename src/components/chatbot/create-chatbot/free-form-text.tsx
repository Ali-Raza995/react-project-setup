import React, { useState } from 'react';
import RecommendedDocuments from './recommended-documents';
import { recommendedContent } from '../../../data';
import CommonInputField from '../../shared/custom-input';
import CommonButton from '../../shared/button';

const FreeFormText = () => {
    const [freeFormText, setFreeFormText] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFreeFormText(event?.target.value);
    };
    const handleSubmit = async () => {
        console.log('freeFormText', freeFormText);
    };
    return (
        <>
            <p className="text-[20px] text-tertiary lMob:text-lg mt-8">Enter freeform text</p>
            <p className="text-medium-gray max-w-[50rem] w-full lMob:text-xs">
                Add any additional content here to help your chat assistant answer any relevant questions that your potential clients might
                have.
            </p>
            <div className="grid grid-cols-10 gap-14 lMob:grid-cols-1 tab:grid-cols-1 lMob:gap-6 tab:gap-6">
                <div className="col-span-6 w-full lMob:col-span-10 tab:col-span-10">
                    <div className="mt-8">
                        <div className="flex flex-col items-center justify-center bg-gray-900">
                            <div className="relative w-full">
                                <textarea
                                    className="w-full h-64 p-2 bg-[#232322] rounded-[20px] text-white outline-[#232322] px-6 py-4 placeholder-gray-500 border border-[#232322] resize-none"
                                    placeholder="Enter text here"
                                    value={freeFormText}
                                    onChange={(e) => setFreeFormText(e.target.value)}
                                />
                                <div className="flex justify-end gap-4 items-center mt-2 text-gray-500">
                                    <span className="text-gray text-xs">{freeFormText.length} / 1000 characters</span>
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/upgrade-more.svg" alt="" />
                                        <a href="#" className="text-soft-cyan text-xs">
                                            Upgrade for more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] lMob:hidden block">
                            <button className="bg-charcoal-gray hover:bg-gray-600 text-white py-3 px-6 rounded-[190px] mt-6">
                                <span className="text-[20px]"> + </span> Create assistant
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lMob:col-span-10 tab:col-span-10">
                    <RecommendedDocuments recommendations={recommendedContent} />
                </div>
            </div>
        </>
    );
};

export default FreeFormText;
