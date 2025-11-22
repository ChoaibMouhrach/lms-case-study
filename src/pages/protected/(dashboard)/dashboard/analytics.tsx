import { BookIcon, CheckCircle2, ClockIcon, ZapIcon } from "lucide-react";

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
    title: "Total points",
    value: "3200",
    icon: ZapIcon,
  },
];

export const Analytics = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {cards.map(({ icon: Icon, ...card }, index) => (
        <div key={index} className="bg-background rounded-md border p-4">
          <div className="flex items-end justify-between text-muted-foreground">
            <span className="text-sm block">{card.title}</span>
            <Icon size={16} />
          </div>
          <span className="text-xl font-semibold">{card.value}</span>
        </div>
      ))}
    </div>
  );
};
