import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Amina Khalil",
    username: "amina_k",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: 1,
    points: 1240,
  },
  {
    id: 2,
    name: "Lucas Meyer",
    username: "lucas_m",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rank: 2,
    points: 1175,
  },
  {
    id: 3,
    name: "Sara Ito",
    username: "sara_ito",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rank: 3,
    points: 1090,
  },
  {
    id: 4,
    name: "Daniel Park",
    username: "danielp",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rank: 4,
    points: 980,
  },
  {
    id: 5,
    name: "Julia Rossi",
    username: "julia_r",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    rank: 5,
    points: 870,
  },
  {
    id: 6,
    name: "Omar Haddad",
    username: "omar_h",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rank: 6,
    points: 765,
  },
];

export const LeaderBoard = () => {
  return (
    <table>
      <tbody className="gap-4">
        {users.map((user, index) => (
          <tr key={user.id} className="bg-background">
            <td className="pb-1">
              <div
                className={cn(
                  "border-l border-y p-2 rounded-l pl-3",
                  index === 0 ? "border-primary" : ""
                )}
              >
                {user.rank}
              </div>
            </td>
            <td className="pb-1">
              <div
                className={cn(
                  "border-y p-2",
                  index === 0 ? "border-primary" : ""
                )}
              >
                {user.name}
                {index === 4 && (
                  <span className="text-primary ml-1 text-sm">(You)</span>
                )}
              </div>
            </td>
            <td className="pb-1">
              <div
                className={cn(
                  "border-r border-y p-2 pr-3 rounded-r text-primary ",
                  index === 0 ? "border-primary" : ""
                )}
              >
                <ZapIcon size={16} className="inline mr-1" />
                {user.points}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
