import React from 'react';

type InputFieldProps = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    height?: string;
    type?: string;
    placeholderColor?: string;
};

const CommonInputField: React.FC<InputFieldProps> = ({
    placeholder,
    value,
    onChange,
    width = 'w-full',
    height = 'h-12',
    type = 'text',
    placeholderColor
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${width} ${height} bg-secondary text-white rounded-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition placeholder:text-light-grey `}
        />
    );
};

export default CommonInputField;
