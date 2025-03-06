import type { Route } from "../../+types/root";
import { WelcomeToTheBlog } from "../../posts/welcome-to-the-blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function welcomeToTheBlog_page() {
  return <WelcomeToTheBlog />;
}