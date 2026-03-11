import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Risks from "./pages/Risks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/committee",
    Component: Committee,
  },
  {
    path: "/risks",
    Component: Risks,
  },
]);
