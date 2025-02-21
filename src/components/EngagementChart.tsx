
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", engagement: 4000 },
  { date: "Feb", engagement: 3000 },
  { date: "Mar", engagement: 5000 },
  { date: "Apr", engagement: 4800 },
  { date: "May", engagement: 6000 },
  { date: "Jun", engagement: 5500 },
];

export const EngagementChart = () => {
  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Engagement Over Time</h3>
        <p className="text-sm text-muted-foreground">Last 6 months engagement rate</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
