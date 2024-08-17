import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactNode } from "react";
import React from "react";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
