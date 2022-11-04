import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    path: "/home",
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    path: "/properties",
    title: "Properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>SIgn in Page</h1>,
    path: "/signin",
    title: "SignIn",
    private: false,
    hidden: true,
  },
];
