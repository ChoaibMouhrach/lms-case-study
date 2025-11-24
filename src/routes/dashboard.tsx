import { protectedlLayout } from "./protected";
import { createRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/protected/(dashboard)/layout";
import { DashboardPage } from "@/pages/protected/(dashboard)/dashboard/page";
import { CoursePage } from "@/pages/protected/(dashboard)/courses/[courseId]/page";
import { LessonPage } from "@/pages/protected/(dashboard)/courses/[courseId]/lesson/page";
import { ProfilePage } from "@/pages/protected/(dashboard)/profile/page";

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

export const lessonRoute = createRoute({
  path: "/courses/$courseId/lesson/$lessonId",
  component: () => <LessonPage />,
  getParentRoute: () => dashboardLayout,
});

export const profileRoute = createRoute({
  path: "/profile",
  component: () => <ProfilePage />,
  getParentRoute: () => dashboardLayout,
});

export const dashboardRouteTree = dashboardLayout.addChildren([
  dashboardRoute,
  courseRoute,
  lessonRoute,
  profileRoute,
]);
