import React from "react";
import { useParams, useLocation } from "react-router-dom";
const ProfilePage = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  console.log(params);
  return (
    <div>
      <h1>ProfilePage for {params.profileid} </h1>
      <p> The Current URL Path : {location.pathname}</p>
    </div>
  );
};

export default ProfilePage;
