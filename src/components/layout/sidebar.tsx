import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navRoutes } from '../../data/sidebar';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="sm:h-screen p-8 sm:block">
            <img src="/assets/specter-logo.svg" alt="Specter" className="specter-logo" />

            <div className="flex justify-center lMob:mt-0 mt-12 flex-col">
                <div className='lMob:grid grid-cols-3 justify-center'>
                    {navRoutes?.map(({ path, routeName, icon }, ind) => {
                        return (
                            <Link key={routeName} className="flex flex-col items-center mt-6 gap-2" to={path}>
                                <div
                                    className={`w-14 h-14 rounded-[22px] ${currentPath === path ? 'bg-secondary' : ''} hover:bg-secondary flex justify-center items-center _sidebar-items-border`}
                                >
                                    <img src={icon} alt="" width={20} height={20} />
                                </div>

                                <p className={`text-[14px] ${currentPath === path ? 'text-white' : 'text-light-gray'}  text-light-gray`}>{routeName}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
