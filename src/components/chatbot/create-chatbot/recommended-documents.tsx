import React from 'react';

const RecommendedDocuments: React.FC = () => {
    return (
        <div className="bg-mid-night p-6 px-8 rounded-2xl mt-6 flex flex-col gap-2">
            <div className='flex items-center gap-2'>
                <img src="/assets/pin.svg" alt="pin logo" width="16px" height="16px"/>
                <h3 className="mb-2 text-tertiary text-sm">Recommended documents</h3>
            </div>
            <ul className="list-disc list-inside space-y-1 text-steel-gray text-xs flex flex-col gap-1">
                <li>Project case study</li>
                <li>Details on your services</li>
                <li>Previous project proposals</li>
                <li>Client onboarding guide</li>
                <li>Pricing and packaging</li>
                <li>Blog posts you've written</li>
            </ul>
        </div>
    );
};

export default RecommendedDocuments;
