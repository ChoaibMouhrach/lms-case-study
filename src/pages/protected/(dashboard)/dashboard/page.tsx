import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/components/dashboard-page";
import { DotIcon } from "lucide-react";
import { Courses } from "./courses";
import { LeaderBoard } from "./leader-board";
import { Rank } from "./rank";
import { Analytics } from "./analytics";

export const DashboardPage = () => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>Bon retour, Alex</DashboardTitle>
        <DashboardDescription>
          Master Finance Internationale <DotIcon size={16} className="inline" />{" "}
          Semestre 1 - 2024/2025
        </DashboardDescription>
      </DashboardHeader>
      <DashboardContent>
        <div>
          <Analytics />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-6">
          <div className="xl:col-span-3">
            <Courses />
          </div>
          <div className="xl:col-span-1 flex flex-col gap-4">
            <Rank />
            <LeaderBoard />
          </div>
        </div>
      </DashboardContent>
    </Dashboard>
  );
};
