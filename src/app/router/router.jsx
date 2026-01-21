import { createBrowserRouter } from "react-router";
import Home from "../../pages/Home/Home";
import UserSetup from "../../pages/UserSetup/UserSetup";
import AiChatPage from "../../pages/AiChatPage/AiChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "setup", element: <UserSetup /> },
  { path: "chat", element: <AiChatPage /> },
]);
