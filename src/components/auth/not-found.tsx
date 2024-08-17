import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import React from 'react';

const NotFound: FC = () => {
    const navigate = useNavigate();

    return (
        <div className='text-center pt-32 text-tertiary'>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
    );
};

export default NotFound;
