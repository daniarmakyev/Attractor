import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    id: "root",
    //   errorElement: <ErrorPage />,
    //   element: <MainLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
