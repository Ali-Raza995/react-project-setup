import React from 'react';
import { AppRoutes } from './routes/routes';

const App: React.FC = () => {
    return (
        <div className='bg-primary min-h-screen'>
            <AppRoutes />
        </div>
    );
};

export default App;
