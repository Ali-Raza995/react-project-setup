import React from 'react';
import { Recommendations } from '../../../types';

interface RecommendationsInterface {
    recommendations: Recommendations;
}

const RecommendedDocuments: React.FC<RecommendationsInterface> = ({ recommendations }) => {
    return (
        <div className="bg-mid-night p-6 px-8 rounded-2xl mt-6 lMob:mt-0 flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <img src="/assets/pin.svg" alt="pin logo" width="16px" height="16px" />
                <h3 className="mb-2 text-tertiary text-sm">{recommendations.heading}</h3>
            </div>
            <ul className="custom-list space-y-1 text-steel-gray text-xs flex flex-col gap-1">
                {recommendations.documents.map((document) => (
                    <li key={document.id}>{document.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendedDocuments;
