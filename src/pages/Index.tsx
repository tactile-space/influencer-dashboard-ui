
import { ProfileHeader } from "@/components/ProfileHeader";
import { StatsOverview } from "@/components/StatsOverview";
import { EngagementChart } from "@/components/EngagementChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="container mx-auto px-4 space-y-8">
        <ProfileHeader />
        <StatsOverview />
        <EngagementChart />
      </div>
    </div>
  );
};

export default Index;
