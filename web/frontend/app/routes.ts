import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home_page.tsx"), // Home route at "/"
  route("/about", "routes/about_page.tsx"), // About route at "/about"
  route("/welcome-to-the-blog", "routes/post_routes/welcome-to-the-blog_page.tsx"),
  route("/contact", "routes/contact_page.tsx")
] satisfies RouteConfig;
