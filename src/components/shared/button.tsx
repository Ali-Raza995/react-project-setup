import React from 'react';

type ButtonProps = {
    text: string;
    onClick?: () => void;
    width?: string;
    height?: string;
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
    loading?: boolean;
    hoverStyles?: string; // Custom hover styles
    activeStyles?: string; // Custom active styles
    isActive?: boolean; // To determine if the button should be styled as active
};

const CommonButton: React.FC<ButtonProps> = ({
    text,
    onClick,
    width = 'w-full',
    height = 'h-12',
    type = 'button',
    icon,
    loading = false,
    hoverStyles = '',
    activeStyles = '',
    isActive = false, // Check if button is active
}) => {
    const baseStyles = `flex items-center justify-center rounded-full lMob:rounded-xl  shadow-md transition ${width} ${height} bg-secondary ${isActive ? 'text-black' : 'text-tertiary '}`;
    const hoverClass = hoverStyles ? hoverStyles : '';
    const activeClass = isActive ? activeStyles : ''; // Apply active styles if isActive is true

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${hoverClass} ${activeClass}`}
            disabled={loading} // Disable button when loading
        >
            <span className="flex items-center gap-4 justify-center">
                {loading ? (
                    <div className="animate-spin-slow rounded-full h-6 w-6 border-4 border-dotted border-medium-gray"></div>
                ) : (
                    <>
                        {icon && <img src={icon} alt="icon" />}
                        <span className="text-base lMob:text-xs sMob:text-[9px]">{text}</span>
                    </>
                )}
            </span>
        </button>
    );
};

export default CommonButton;
