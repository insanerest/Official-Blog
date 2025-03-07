import type { Route } from "../+types/root"
import Contact from "../contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact_page() {
  return <Contact />;
}
