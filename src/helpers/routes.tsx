import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import Layout from "./layouts";
import Repositorys from "../pages/Repositorys";

export const router = createBrowserRouter([
  {
    id: "root",
    //   errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/repo", element: <Repositorys /> },
    ],
  },
  {
    id: "main",
    children: [{ path: "/", element: <Main /> }],
  },
]);
