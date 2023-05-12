import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children; // not how we can return children without any jsx
};

export { RequireAuth };
