import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navRoutes } from '../../data/sidebar';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="w-32 h-screen p-8 hidden sm:block">
            <img src="/assets/specter-logo.svg" alt="Specter" />
            <div className="flex justify-center mt-12 flex-col">
                <div>
                    {navRoutes?.map(({ path, routeName, icon }, ind) => {
                        return (
                            <Link key={routeName} className="flex flex-col mt-6 gap-2" to={path}>
                                <div
                                    className={`w-14 h-14 rounded-2xl ${currentPath === path ? 'bg-secondary' : ''} flex justify-center _sidebar-items-border`}
                                >
                                    <img src={icon} alt="" width={20} height={20} />
                                </div>
                                <p className="text-[14px] text-light-gray">{routeName}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
