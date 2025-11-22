import { rootRoute } from "./root";
import { authRouteTree } from "./auth";
import { mainRouteTree } from "./main";
import { createRouter } from "@tanstack/react-router";
import { protectedRouteTree } from "./protected";

const routeTree = rootRoute.addChildren([
  mainRouteTree,
  authRouteTree,
  protectedRouteTree,
]);

export const router = createRouter({
  routeTree,
});
