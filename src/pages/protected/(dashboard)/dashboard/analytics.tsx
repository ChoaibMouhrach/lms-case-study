import { cn } from "@/lib/utils";
import { BookIcon, CheckCircle2, ClockIcon } from "lucide-react";

const cards = [
  {
    title: "Modules Finance",
    value: "8",
    icon: BookIcon,
  },
  {
    title: "En progression",
    value: "3",
    icon: ClockIcon,
  },
  {
    title: "Certifiés",
    value: "5",
    icon: CheckCircle2,
  },
  {
    title: <span>Pièces</span>,
    value: "147",
    icon: ({ className }: { className?: string }) => (
      <img
        src="/coin.png"
        alt="Coin"
        width={24}
        height={24}
        className={cn("object-contain -ml-1", className)}
      />
    ),
  },
];

export const Analytics = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {cards.map(({ icon: Icon, ...card }, index) => (
        <div key={index} className="bg-background rounded-md border p-3 sm:p-4">
          <div className="flex items-end justify-between text-muted-foreground mb-2">
            <span className="text-xs sm:text-sm block leading-tight">
              {card.title}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg sm:text-xl font-semibold">
              {card.value}
            </span>
            <Icon size={16} className="sm:hidden" />
            <Icon size={18} className="hidden sm:block" />
          </div>
        </div>
      ))}
    </div>
  );
};
