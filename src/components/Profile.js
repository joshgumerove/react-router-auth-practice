import React from "react";
import { useAuth } from "./auth";

const Profile = () => {
  const { user } = useAuth();
  return <div>Welcome {user}</div>;
};

export { Profile };
