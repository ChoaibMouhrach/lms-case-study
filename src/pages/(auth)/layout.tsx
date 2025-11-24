import { Outlet } from "@tanstack/react-router";

export const AuthLayout = () => {
  return (
    <main className="w-screen min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md">
        <Outlet />
      </div>
    </main>
  );
};
