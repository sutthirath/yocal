import React from "react";

export const UserProfile = props => {
  const name = props.user.name.split(" ")[0];
  return (
    <div className="User-profile">
      <ul>
        <li>Hello, {name}</li>
        <li style={{ margin: "0 5px" }}>|</li>
        <li onClick={props.logout}>Logout</li>
      </ul>
    </div>
  );
};
