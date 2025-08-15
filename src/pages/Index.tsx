import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">HopeAid Charity</h1>
        <p className="text-xl text-muted-foreground mb-6">Empowering communities through water, food, shelter, and education.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/donate">Donate Now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/admin">Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
