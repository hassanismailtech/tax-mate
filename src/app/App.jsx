import { RouterProvider } from "react-router";

import { router } from "./router/router.jsx";
import Header from "../shared/ui/Header.jsx";

export default function App() {
  return (
    <div className="bg-[hsl(var(--color-background))] min-h-screen">
      <Header />

      <RouterProvider router={router} />
    </div>
  );
}
