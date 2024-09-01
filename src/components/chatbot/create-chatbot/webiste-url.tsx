import React, { useState } from 'react';
import RecommendedDocuments from './recommended-documents';
import { recommendedWebsites } from '../../../data';
import CommonInputField from '../../shared/custom-input';
import CommonButton from '../../shared/button';

const WebsiteUrl:React.FC<any> = ({handleUpload}) => {
    const [websiteUrl, setWebsiteUrl] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWebsiteUrl(event?.target.value);
    };
    const handleSubmit = async () => {
        console.log('websiteUrl', websiteUrl);
    };
    return (
        <div className="grid grid-cols-10 gap-6 lMob:gap-0">
            <div className="col-span-6 lap:col-span-10">
                <div className="mt-8">
                    <p className="text-[20px] text-tertiary lMob::text-lg">Add websites</p>
                    <p className="text-medium-gray max-w-[50rem] w-full lMob:text-xs">
                        We recommend adding your website’s pages, as well as any other websites that might give your chat assistant valuable
                        context on your services and offerings.
                    </p>
                    <div className="my-8 grid grid-cols-12 gap-6 lap:gap-x-2.5">
                        <div className="col-span-9 lap:col-span-9">
                            <CommonInputField
                                placeholder="https://www.yourportfolio.com/"
                                fieldValue={websiteUrl}
                                onChange={handleChange}
                                placeholderColor="text-[#4D4D4D]"
                            />
                        </div>
                        <div className="col-span-2 lap:col-span-3">
                            <CommonButton text="Add" onClick={handleSubmit} />
                        </div>
                    </div>

                    <div className=" w-[220px] lap:hidden block">
                        <button onClick={handleUpload} className="bg-charcoal-gray hover:bg-gray-600 text-white py-3 px-6 rounded-[190px] mt-6">
                            <span className="text-[20px]"> + </span> Create assistant
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-3 lap:col-span-10">
                <RecommendedDocuments recommendations={recommendedWebsites} />
            </div>

            <div className=" w-[220px] lap:block hidden">
                <button onClick={handleUpload} className="bg-charcoal-gray hover:bg-gray-600 text-white py-3 px-6 rounded-[190px] mt-6">
                    <span className="text-[20px]"> + </span> Create assistant
                </button>
            </div>
        </div>
    );
};

export default WebsiteUrl;
