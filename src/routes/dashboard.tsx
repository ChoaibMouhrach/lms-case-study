import { protectedlLayout } from "./protected";
import { createRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/protected/(dashboard)/layout";
import { DashboardPage } from "@/pages/protected/(dashboard)/dashboard/page";
import { CoursePage } from "@/pages/protected/(dashboard)/courses/[courseId]/page";

export const dashboardLayout = createRoute({
  getParentRoute: () => protectedlLayout,
  component: () => <DashboardLayout />,
  id: "dashboard-layout",
});

export const dashboardRoute = createRoute({
  path: "/dashboard",
  component: () => <DashboardPage />,
  getParentRoute: () => dashboardLayout,
});

export const courseRoute = createRoute({
  path: "/courses/$courseId",
  component: () => <CoursePage />,
  getParentRoute: () => dashboardLayout,
});

export const dashboardRouteTree = dashboardLayout.addChildren([
  dashboardRoute,
  courseRoute,
]);
