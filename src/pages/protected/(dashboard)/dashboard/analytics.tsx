import { cn } from "@/lib/utils";
import { BookIcon, CheckCircle2, ClockIcon } from "lucide-react";

const cards = [
  {
    title: "Cours S1",
    value: "6",
    icon: BookIcon,
  },
  {
    title: "En cours",
    value: "4",
    icon: ClockIcon,
  },
  {
    title: "Validés",
    value: "2",
    icon: CheckCircle2,
  },
  {
    title: <span>Pièces</span>,
    value: "18",
    icon: ({ className }: { className?: string }) => (
      <img
        src="/Coin.png"
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
