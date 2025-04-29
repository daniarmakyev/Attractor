import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Layout from "./layouts";
import Repositorys from "../pages/Repositorys";
import OtherUsers from "../pages/OtherUsers";

export const router = createBrowserRouter([
  {
    id: "root",
    //   errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/repo", element: <Repositorys /> },
      { path: "/other", element: <OtherUsers /> },
    ],
  },
  {
    id: "main",
    children: [{ path: "/", element: <Main /> }],
  },
]);
