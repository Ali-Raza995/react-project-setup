import React from 'react';

import { Link } from 'react-router-dom';
const Sidebar = () => {
    const navRoutes = [
        {
            path: '/',
            routeName: 'Chatbots',
            icon: '/assets/dashboardIcon.svg'
        },
        {
            path: '/',
            routeName: 'Analytics',
            icon: '/assets/AnalyticsIcon.svg'
        },
        {
            path: '/',
            routeName: 'Settings',
            icon: '/assets/SettingsIcon.svg'
        }
    ];

    return (
        <div className="w-32 h-screen p-8 hidden sm:block">
            <h3>specter</h3>
            <div className="flex justify-center mt-16 flex-col">
                <div>
                    {navRoutes.map(({ path, routeName, icon }, ind) => {
                        return (
                            <Link key={routeName} className="flex flex-col mt-6 gap-2" to={path}>
                                <div className="w-14 h-14 rounded-2xl bg-secondary flex justify-center">
                                    <img src={icon} alt="" width={20} height={20} />
                                </div>
                                <p className="text-[14px]">{routeName}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
