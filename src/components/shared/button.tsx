import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    width?: string;
    height?: string;
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
};

const CommonButton: React.FC<ButtonProps> = ({ text, onClick, width = 'w-full', height = 'h-12', type = 'button', icon }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${width} ${height} bg-secondary text-tertiary rounded-full flex items-center justify-center shadow-md  transition`}
        >
            <span className="flex items-center gap-4 justify-center">
                {icon && <img src={icon} alt="icon" />}
                <span className="text-base">{text}</span>
            </span>
        </button>
    );
};

export default CommonButton;
