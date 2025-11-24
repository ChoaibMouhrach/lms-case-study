import {
  Coin,
  FirstPlace,
  SecondPlace,
  ThirdPlace,
} from "@/components/icons/ranks";
import { cn } from "@/lib/utils";

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
    id: 6,
    name: "Daniel Park",
    username: "danielp",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rank: 22,
    points: 980,
  },
];

export const LeaderBoard = () => {
  return (
    <table>
      <tbody className="gap-4">
        {users.map((user, index) => (
          <tr key={user.id}>
            <td className="pb-1">
              <div
                className={cn(
                  "border-l border-y h-12 bg-background flex items-center justify-center rounded-l pl-2",
                  index === 0 ? "border-primary" : ""
                )}
              >
                {user.rank === 1 && <FirstPlace size={28} />}
                {user.rank === 2 && <SecondPlace size={28} />}
                {user.rank === 3 && <ThirdPlace size={28} />}

                {user.rank > 3 && user.rank}
              </div>
            </td>
            <td className="pb-1">
              <div
                className={cn(
                  "border-y h-12 bg-background flex items-center pl-3",
                  index === 0 ? "border-primary" : ""
                )}
              >
                {user.name}
                {index === 3 && (
                  <span className="text-primary ml-1 text-sm">(You)</span>
                )}
              </div>
            </td>
            <td className="pb-1">
              <div
                className={cn(
                  "border-r border-y h-12 bg-background flex items-center pr-3 rounded-r text-primary ",
                  index === 0 ? "border-primary" : ""
                )}
              >
                <Coin size={24} />
                {user.points}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
