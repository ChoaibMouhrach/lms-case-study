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
          Informatique <DotIcon size={16} className="inline" /> 2024/2025
        </DashboardDescription>
      </DashboardHeader>
      <DashboardContent>
        <div>
          <Analytics />
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          <div className="col-start-1 col-end-4">
            <Courses />
          </div>
          <div className="flex flex-col gap-4">
            <Rank />
            <LeaderBoard />
          </div>
        </div>
      </DashboardContent>
    </Dashboard>
  );
};
