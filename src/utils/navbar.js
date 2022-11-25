import React from "react";
import useId from "../hooks/useId";
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HomePage = React.lazy(() => import("../pages/Home"));
// import HomePage from "../pages/Home";
// import PropertiesPage from "../pages/Properties";
export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    path: "/home",
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading... </React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),

    path: "/properties",
    title: "Properties",
    private: false,
    hidden: false,
  },
  // {
  //   id: useId,
  //   element: <h1>SIgn in Page</h1>,
  //   path: "/signin",
  //   title: "SignIn",
  //   private: false,
  //   hidden: true,
  // },
];
