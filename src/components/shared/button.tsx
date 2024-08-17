import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    width?: string;
    height?: string;
    type?: 'button' | 'submit' | 'reset';
};

const CommonButton: React.FC<ButtonProps> = ({ text, onClick, width = 'w-full', height = 'h-12', type = 'button' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${width} ${height} bg-secondary text-tertiary rounded-full flex items-center justify-center shadow-md  transition`}
        >
            <span className="flex items-center justify-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google Icon"
                    className="h-5 w-5 mr-2"
                />
                {text}
            </span>
        </button>
    );
};

export default CommonButton;
