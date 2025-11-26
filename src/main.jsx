// Without Shared Components in App.jsx file
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

//Lazy Imports
const ProfilesPage = lazy(() => import("./pages/ProfilesPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

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
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
