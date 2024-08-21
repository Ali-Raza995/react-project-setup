import { FC, lazy } from 'react';
import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
import Login from '../components/auth/login';
import SignUp from '../components/auth/signup';
import NotFound from '../components/auth/not-found';
import { ROUTE_CONSTANTS } from './route-constants';
import React from 'react';
import { Loadable } from '../utils/loadable';
import VerifyMagicLink from '../components/auth/verify-email';
import RequireAuth from '../components/auth/require-auth';

const ChatBotLazy = Loadable(lazy(() => import('../pages/chatbot/index')));

const AuthLayout: FC<{ redirectAuthenticatedTo: string }> = ({ redirectAuthenticatedTo }) => {
    return (
        <RequireAuth redirectAuthenticatedTo={redirectAuthenticatedTo}>
            <Outlet />
        </RequireAuth>
    );
};

const ProtectedLayout: FC = () => {
    return (
        <RequireAuth>
            <Outlet />
        </RequireAuth>
    );
};

export const AppRoutes: FC = () => (
    <Routes>
        <Route path={ROUTE_CONSTANTS.SLASH} element={<Navigate to={ROUTE_CONSTANTS.DASHBOARD} />} />

        <Route element={<AuthLayout redirectAuthenticatedTo={ROUTE_CONSTANTS.CHATBOT} />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.SIGNUP} element={<SignUp />} />
            <Route path={ROUTE_CONSTANTS.VERIFYEMAIL} element={<VerifyMagicLink />} />
        </Route>

        {/* Grouping authenticated (protected) routes */}
        <Route element={<ProtectedLayout />}>
            <Route path={ROUTE_CONSTANTS.CHATBOT} element={<ChatBotLazy />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);
