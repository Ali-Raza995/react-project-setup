import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactNode } from "react";
import React from "react";

interface RequireAuthProps {
  children: ReactNode;
  redirectAuthenticatedTo?: string;  // Optional prop to handle authenticated user redirection
}

const RequireAuth: FC<RequireAuthProps> = ({ children, redirectAuthenticatedTo }) => {
  const session = localStorage?.getItem("session");
  const isAuthenticated = session ? JSON.parse(session) : null;
  
  const location = useLocation();

  if (isAuthenticated && redirectAuthenticatedTo) {
    return <Navigate to={redirectAuthenticatedTo} state={{ from: location }} replace />;
  }

  if (!isAuthenticated && !redirectAuthenticatedTo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
