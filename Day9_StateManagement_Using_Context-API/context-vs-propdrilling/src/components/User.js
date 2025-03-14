import React from "react";
import { UserContext } from "./context/UserContext";

const User = ({ userName }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h4>User Component</h4>
      <p>👤 User: {userName}</p>
    </div>
  );
};

export default User;