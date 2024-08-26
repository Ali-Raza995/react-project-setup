import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import RequireAuth from '../auth/require-auth';

interface ProtectedLayoutProps {
    showSidebar?: boolean;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ showSidebar = true }) => {
    return (
        <RequireAuth>
            <div className="text-white flex lMob:flex-col">
                {showSidebar && <Sidebar />}
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </RequireAuth>
    );
};

export default ProtectedLayout;
