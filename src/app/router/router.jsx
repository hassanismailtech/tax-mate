import { createBrowserRouter } from "react-router";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
