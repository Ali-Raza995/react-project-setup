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
import OAuthCallback from '../components/auth/google-oauth';
import ProtectedLayout from '../components/layout/protected-layout';
import CheckEmail from '../components/auth/check-email';

const ChatBotLazy = Loadable(lazy(() => import('../pages/chatbot/index')));
const CREATEChatBotLazy = Loadable(lazy(() => import('../pages/chatbot/create-chatbot/index')));

const AuthLayout: FC<{ redirectAuthenticatedTo: string }> = ({ redirectAuthenticatedTo }) => {
    return (
        <RequireAuth redirectAuthenticatedTo={redirectAuthenticatedTo}>
            <Outlet />
        </RequireAuth>
    );
};

export const AppRoutes: FC = () => (
    <Routes>
        <Route path={ROUTE_CONSTANTS.SLASH} element={<Navigate to={ROUTE_CONSTANTS.CREATE_CHATBOT} />} />

        <Route element={<AuthLayout redirectAuthenticatedTo={ROUTE_CONSTANTS.CREATE_CHATBOT} />}>
            <Route path={ROUTE_CONSTANTS.LOGIN} element={<Login />} />
            <Route path={ROUTE_CONSTANTS.SIGNUP} element={<SignUp />} />
            <Route path={ROUTE_CONSTANTS.VERIFY_EMAIL} element={<VerifyMagicLink />} />
            <Route path={ROUTE_CONSTANTS.CHECK_EMAIL} element={<CheckEmail />} />
            <Route path={ROUTE_CONSTANTS.AUTH_CALLBACK} element={<OAuthCallback />} />
        </Route>
        <Route element={<ProtectedLayout showSidebar={true} />}>
            <Route path={ROUTE_CONSTANTS.CREATE_CHATBOT} element={<ChatBotLazy />} />
            <Route path={ROUTE_CONSTANTS.CREATE_ASSISTANT} element={<CREATEChatBotLazy />} />
        </Route>

        <Route element={<ProtectedLayout showSidebar={false} />}></Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
);
