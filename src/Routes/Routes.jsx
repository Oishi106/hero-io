import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";

// named export
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <span className="loading loading-spinner loading-xl"></span>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
