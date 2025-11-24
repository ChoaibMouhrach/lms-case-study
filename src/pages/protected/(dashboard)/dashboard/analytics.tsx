import { Coin } from "@/components/icons/ranks";
import { BookIcon, CheckCircle2, ClockIcon } from "lucide-react";

const cards = [
  {
    title: "Active courses",
    value: "2",
    icon: BookIcon,
  },
  {
    title: "Pending courses",
    value: "12",
    icon: ClockIcon,
  },
  {
    title: "Completed courses",
    value: "2",
    icon: CheckCircle2,
  },
  {
    title: "Total coins",
    value: "3200",
    icon: ({ size }: { size?: number }) => (
      <Coin size={size ? size + 10 : undefined} />
    ),
  },
];

export const Analytics = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map(({ icon: Icon, ...card }, index) => (
        <div key={index} className="bg-background rounded-md border p-4">
          <div className="flex items-end justify-between text-muted-foreground">
            <span className="text-sm block">{card.title}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-semibold">{card.value}</span>
            <Icon size={18} />
          </div>
        </div>
      ))}
    </div>
  );
};
