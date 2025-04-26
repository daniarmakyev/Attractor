import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

export const router = createBrowserRouter([
  {
    id: "root",
    //   errorElement: <ErrorPage />,
    //   element: <MainLayout />,
    children: [{ path: "/", element: <Main /> }],
  },
]);
