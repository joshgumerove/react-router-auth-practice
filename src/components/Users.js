import React from "react";
import { Outlet, Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Link to="1">User 1</Link>
      <Link to="2">User 2</Link>
      <Link to="3">User 3</Link>
      {/* <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2> */}
      <Outlet />
    </div>
  );
};

export { Users };
