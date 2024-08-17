import { FC, lazy, LazyExoticComponent, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../components/auth/login';
import RequireAuth from '../components/auth/require-auth';
import NotFound from '../components/auth/not-found';
import { ROUTE_CONSTANTS } from './route-constants';
import React from 'react';
import { Loadable } from '../utils/loadable';


const DashboardLazy = Loadable(lazy(() => import('../pages/dashboard/index')));

export const AppRoutes: FC = () => (
    <Routes>
        <Route path={ROUTE_CONSTANTS.SLASH} element={<Navigate to={ROUTE_CONSTANTS.DASHBOARD} />} />
        <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
        <Route
            path={ROUTE_CONSTANTS.DASHBOARD}
            element={
                <RequireAuth>
                    <DashboardLazy />
                </RequireAuth>
            }
        />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
