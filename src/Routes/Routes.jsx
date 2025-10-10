import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import App from "../Pages/App";
import AppDetails from "../Pages/AppDetails";

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
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
