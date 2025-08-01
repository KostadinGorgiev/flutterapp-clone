import type { Route } from "./+types/home";
import { Home as HomePage } from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FlutterPads | Home" },
    { name: "description", content: "Live where you want, when you want. No baggage." },
  ];
}

export default function Home() {
  return <HomePage />;
}
