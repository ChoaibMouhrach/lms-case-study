import { Outlet } from "@tanstack/react-router";
import { Navigation } from "./navigation";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-muted/40">
      <Navigation />
      <Outlet />
    </div>
  );
};
