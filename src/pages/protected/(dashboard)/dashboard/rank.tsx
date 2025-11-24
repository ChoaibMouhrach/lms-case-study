import { Coin, FakeRank } from "@/components/icons/ranks";
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
    <div className="bg-background rounded-md border p-4">
      <div className="relative">
        <ChartRadialText />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pb-3">
          <FakeRank size={140} />
        </div>
      </div>

      <div className="flex flex-col text-center">
        <div className="flex items-center justify-center">
          <span className="font-semibold">2850</span> <Coin size={24} />
        </div>
        <span className="text-muted-foreground">200 pour le niveau suivant</span>
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
      className="mx-auto aspect-square max-h-[200px]"
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
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Maître
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
