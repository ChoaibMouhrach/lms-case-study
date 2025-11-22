import { rootRoute } from "./root";
import { HomePage } from "@/pages/(main)/page";
import { MainLayout } from "@/pages/(main)/layout";
import { createRoute, redirect } from "@tanstack/react-router";
import { AboutPage } from "@/pages/(main)/about/page";

const mainLayout = createRoute({
  id: "main-layout",
  component: () => <MainLayout />,
  getParentRoute: () => rootRoute,
});

const home = createRoute({
  getParentRoute: () => mainLayout,
  component: () => <HomePage />,
  path: "/",

  beforeLoad: () => {
    throw redirect({
      to: "/dashboard",
    });
  },
});

const about = createRoute({
  getParentRoute: () => mainLayout,
  component: () => <AboutPage />,
  path: "/about",
});

export const mainRouteTree = mainLayout.addChildren([home, about]);
