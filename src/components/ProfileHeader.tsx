
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Settings } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="p-6 flex items-center justify-between animate-in">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=80"
            alt="Profile"
            className="object-cover"
          />
        </Avatar>
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Sarah Johnson</h1>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Instagram className="h-4 w-4" />
            @sarahcreates
          </p>
        </div>
      </div>
      <Button variant="outline" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </Card>
  );
};
