import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomePage from "./routes/home_page";
import AboutPage from "./routes/about_page";
import WelcomeToTheBlogPage from "./routes/post_routes/welcome-to-the-blog_page";
import ContactPage from "./routes/contact_page";

const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/welcome-to-the-blog", element: <WelcomeToTheBlogPage/> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
