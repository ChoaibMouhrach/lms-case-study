import { FirstPlace, SecondPlace, ThirdPlace } from "@/components/icons/ranks";
import { cn } from "@/lib/utils";

const users = [
  {
    id: 1,
    name: "Amina El-Rashid",
    username: "amina_er",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rank: 1,
    pieces: 147,
  },
  {
    id: 2,
    name: "Chen Wei-Ming",
    username: "chen_wm",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rank: 2,
    pieces: 124,
  },
  {
    id: 3,
    name: "Sofia Petrova",
    username: "sofia_p",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rank: 3,
    pieces: 98,
  },
  {
    id: 6,
    name: "Alex Martin",
    username: "alex_m",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rank: 8,
    pieces: 67,
  },
];

export const LeaderBoard = () => {
  return (
    <div className="bg-background rounded-md border p-4">
      <h3 className="font-semibold text-sm mb-3">Classement</h3>
      <div className="space-y-2">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md border bg-background/50",
              index === 0 ? "border-primary bg-primary/5" : ""
            )}
          >
            <div className="flex items-center justify-center w-8 h-8 shrink-0">
              {user.rank === 1 && (
                <div className="sm:hidden">
                  <FirstPlace size={24} />
                </div>
              )}
              {user.rank === 1 && (
                <div className="hidden sm:block">
                  <FirstPlace size={28} />
                </div>
              )}
              {user.rank === 2 && (
                <div className="sm:hidden">
                  <SecondPlace size={24} />
                </div>
              )}
              {user.rank === 2 && (
                <div className="hidden sm:block">
                  <SecondPlace size={28} />
                </div>
              )}
              {user.rank === 3 && (
                <div className="sm:hidden">
                  <ThirdPlace size={24} />
                </div>
              )}
              {user.rank === 3 && (
                <div className="hidden sm:block">
                  <ThirdPlace size={28} />
                </div>
              )}
              {user.rank > 3 && (
                <span className="text-sm font-medium">{user.rank}</span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium truncate">
                  {user.name}
                </span>
                {index === 3 && (
                  <span className="text-primary text-xs">(Vous)</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 text-primary font-medium text-sm">
              <div className="sm:hidden">
                <img
                  src="/coin.png"
                  alt="Coin"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <img
                  src="/coin.png"
                  alt="Coin"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span>{user.pieces}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
