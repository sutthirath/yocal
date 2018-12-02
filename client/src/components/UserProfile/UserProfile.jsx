import React from "react";
import "./UserProfile.css";

export const UserProfile = props => {
  return (
    <div className="User-profile">
      <ul>
        <li>Hello, {props.user.name}</li>
        <li>|</li>
        <li onClick={props.logout}>Logout</li>
      </ul>
    </div>
  );
};
