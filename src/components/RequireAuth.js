import { Outlet, Navigate, useLocation } from "react-router-dom";
import React from "react";
import { getAuthToken } from "../util/auth";

function RequireAuth() {
  const token = getAuthToken();
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
