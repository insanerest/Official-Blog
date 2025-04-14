import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WelcomeToTheBlog from "./pages/posts/Welcome-to-the-blog";
import BuildingASecureAPI from "./pages/posts/Building-a-secure-API";

const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/welcome-to-the-blog", element: <WelcomeToTheBlog /> },
  {path: "/building-a-secure-api", element: <BuildingASecureAPI/>}
]);

export default router;
