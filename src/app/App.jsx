import { RouterProvider } from "react-router";

import { router } from "./router/router.jsx";
import Header from "../shared/ui/Header.jsx";

export default function App() {
  return (
    <>
      <Header />

      <RouterProvider router={router} />
    </>
  );
}
