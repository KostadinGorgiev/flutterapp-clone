import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/index.tsx", [
    index("routes/home.tsx"),
    route("membership", "./routes/membership.tsx"),
    route("contact", "./routes/contact.tsx"),
    route("invest", "./routes/invest.tsx"),
  ]),
] satisfies RouteConfig;
