import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    width?: string;
    height?: string;
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
    loading?: boolean; // Add loading prop
};

const CommonButton: React.FC<ButtonProps> = ({ text, onClick, width = 'w-full', height = 'h-12', type = 'button', icon, loading = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${width} ${height} bg-secondary text-tertiary rounded-full flex items-center justify-center shadow-md transition`}
            disabled={loading} // Disable button when loading
        >
            <span className="flex items-center gap-4 justify-center">
                {loading ? (
                    <div className="animate-spin-slow rounded-full h-6 w-6 border-4 border-dotted border-light-grey"></div>

                ) : (
                    <>
                        {icon && <img src={icon} alt="icon" />}
                        <span className="text-base">{text}</span>
                    </>
                )}
            </span>
        </button>
    );
};

export default CommonButton;
