import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WelcomeToTheBlog from "./pages/posts/Welcome-to-the-blog";
import Contact from "./pages/Contact";

const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/welcome-to-the-blog", element: <WelcomeToTheBlog/> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
