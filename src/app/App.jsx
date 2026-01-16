import { RouterProvider } from "react-router";

import { router } from "./router/router.jsx";

export default function App() {
  return <RouterProvider router={router} />;
}
