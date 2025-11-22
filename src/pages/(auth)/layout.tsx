import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <main className="w-screen min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </main>
  );
};
