## React Router DOM v7

## Latest Route creation

```bash
import{createBrowserRoutes,RouterProvider} from "react-router-dom"
# imports all pages
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <PageNotFound /> },
  {
    path: "/profiles",
    element:<ProfilesPage />
    errorElement:<PageNotFound/>
  },
  {
    path: "/profiles/:profileid",
    element: <ProfilePage />
  },
]);

```

---

## lazy import component

```bash
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <PageNotFound /> },
  {
    path: "/profiles",
    element: (
      <Suspense fallback={<h2>Page Loading ...</h2>}>
        <ProfilesPage />
      </Suspense>
    ),
    children: [
      {
        path: "/profiles/:profileid",
        element: (
          <Suspense fallback={<h2>Profile Loading ...</h2>}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },

]);
```

---

## without wrapper like

<!-- Old Way of Client Side Routing don't supports Data APIs -->

```bash
<BrowserRouter>
<Routes>
<Route />
</Routes>
</BrowserRouter>
```

---

## New Way with Support of Data APIs

```bash
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
```

---

## children Routes and its placeHolder(Outlet Component)

```bash
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <PageNotFound /> },
  {
    path: "/profiles",
    element: (
      <Suspense fallback={<h2>Page Loading ...</h2>}>
        <ProfilesPage />
      </Suspense>
    ),
    children: [
      {
        path: "/profiles/:profileid",
        element: (
          <Suspense fallback={<h2>Profile Loading ...</h2>}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
]);

## Usage

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
```

---

## Dynamic Routing with Parameters and useLocation() , useParams()

```bash
        path: "/profiles/:profileid",
        element: (
          <Suspense fallback={<h2>Profile Loading ...</h2>}>
            <ProfilePage />
          </Suspense>
        )
        # usage in component
        <div>
       <h2>Profiles Page</h2>
       {profiles.map((profileId) => (
        <NavLink
          key={profileId}
          to={`/profiles/${profileId}`}
        >
          Profile:{profileId}
        </NavLink>
      ))}
    </div>
```

### Notes

<p>THese Two link and path should be same
  <ul>
   <li> path: "/profiles/:profileid",</li>
   <li>  to={`/profiles/${profileId}`}</li>
  </ul>
 </p>

---

## To get Current URL path and its specific params of URL path

```bash
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
```

---

## TO Style the Active Link

<p>To Style the Active Link use NavLink instead of Link from react-router-dom </p>

```
    <NavLink
            style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "blue" : "black",
            textDecoration: isActive ? "underline" : "none",
          })}
          >
          </NavLink>

```

---

## Advance Concepts

 <ul>
  <li><h2>Memory Router</h2></li>
  <li><h2>Static Router</h2></li>
  <li><h2>Protected Router</h2></li>
 </ul>
