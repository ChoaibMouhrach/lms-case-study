import { rootRoute } from "./root";
import { AuthLayout } from "@/pages/(auth)/layout";
import { createRoute } from "@tanstack/react-router";
import { SignInPage } from "@/pages/(auth)/sign-in/page";
import { SignUpPage } from "@/pages/(auth)/sign-up/page";

const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  component: () => <AuthLayout />,
  id: "auth-layout",
});

const signInRoute = createRoute({
  path: "/sign-in",
  getParentRoute: () => authLayout,
  component: () => <SignInPage />,
});

const signUpRoute = createRoute({
  path: "/sign-up",
  getParentRoute: () => authLayout,
  component: () => <SignUpPage />,
});

export const authRouteTree = authLayout.addChildren([signInRoute, signUpRoute]);
