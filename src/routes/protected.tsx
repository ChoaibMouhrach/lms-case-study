import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { dashboardRouteTree } from "./dashboard";

export const protectedlLayout = createRoute({
  id: "protected-layout",
  component: () => <Outlet />,
  getParentRoute: () => rootRoute,
});

export const protectedRouteTree = protectedlLayout.addChildren([
  dashboardRouteTree,
]);
