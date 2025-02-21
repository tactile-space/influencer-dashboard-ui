
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Users, Heart, BarChart3 } from "lucide-react";

const stats = [
  {
    title: "Total Followers",
    value: "124.7K",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Engagement Rate",
    value: "5.2%",
    change: "+0.8%",
    icon: Heart,
  },
  {
    title: "Avg. Reach",
    value: "45.2K",
    change: "+5%",
    icon: BarChart3,
  },
];

export const StatsOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="stats-card">
          <div className="flex items-center justify-between">
            <stat.icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
              {stat.change}
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-semibold">{stat.value}</h3>
            <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
