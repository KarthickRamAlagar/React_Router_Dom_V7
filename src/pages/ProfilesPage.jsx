import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

//Outlet is a placeholder where the child components needs to be rendered in parent component
const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>Profiles Page</h2>
      {profiles.map((profileId) => (
        <NavLink
          key={profileId}
          to={`/profiles/${profileId}`}
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Profile:{profileId}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
