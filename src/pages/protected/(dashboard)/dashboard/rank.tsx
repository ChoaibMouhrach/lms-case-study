import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

export const Rank = () => {
  return (
    <div className="bg-background rounded-md border p-3 sm:p-4">
      <h3 className="font-semibold text-sm mb-2 flex items-center gap-1">
        <img
          src="/Coin.png"
          alt="Coin"
          width={28}
          height={28}
          className="object-contain"
        />
        Progression
      </h3>
      <div className="relative">
        <ChartRadialText />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pb-3">
          <div className="sm:hidden">
            <img
              src="/rank.png"
              alt="Rank"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <img
              src="/rank.png"
              alt="Rank"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center mt-2">
        <div className="flex items-center justify-center gap-1">
          <span className="font-semibold text-lg">147/180</span>
          <img
            src="/Coin.png"
            alt="Coins"
            width={24}
            height={24}
            className="object-contain -ml-1"
          />
        </div>
        <div className="text-muted-foreground text-xs sm:text-sm flex items-center  justify-center">
          <span>33</span>
          <img
            src="/Coin.png"
            alt="Coins"
            width={20}
            height={20}
            className="object-contain "
          />
          <span>restantes ce semestre</span>
        </div>
      </div>
    </div>
  );
};

const chartData = [
  { browser: "safari", visitors: 4, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors zap",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartRadialText() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-40 sm:max-h-[200px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={250}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="visitors" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-2xl sm:text-4xl font-bold"
                    >
                      4
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 20}
                      className="fill-muted-foreground text-sm"
                    >
                      Niveau
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
