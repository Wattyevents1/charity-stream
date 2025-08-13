import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, Target } from "lucide-react";

const UrgentAppealsSection = () => {
  const urgentAppeals = [
    {
      id: 1,
      title: "Emergency Flood Relief",
      description: "Immediate assistance needed for 5,000 families affected by recent flooding in rural communities.",
      target: 150000,
      raised: 87500,
      daysLeft: 7,
      category: "Emergency Response"
    },
    {
      id: 2,
      title: "Winter Warmth Campaign",
      description: "Providing warm clothing and heating solutions for vulnerable families during harsh winter.",
      target: 75000,
      raised: 45600,
      daysLeft: 12,
      category: "Seasonal Appeal"
    },
    {
      id: 3,
      title: "Medical Emergency Fund",
      description: "Critical medical supplies and equipment needed for remote healthcare facilities.",
      target: 200000,
      raised: 134000,
      daysLeft: 5,
      category: "Healthcare"
    }
  ];

  const calculateProgress = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  return (
    <section className="section-padding bg-urgent/5">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-urgent/10 p-3 rounded-full">
              <AlertTriangle className="w-8 h-8 text-urgent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Urgent Appeals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Time-sensitive campaigns that need your immediate support to make a critical difference.
          </p>
        </div>

        {/* Appeals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {urgentAppeals.map((appeal) => (
            <Card key={appeal.id} className="card-hover border-l-4 border-l-urgent overflow-hidden">
              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-urgent/10 text-urgent rounded-full">
                    {appeal.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                  {appeal.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {appeal.description}
                </p>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">
                      ${appeal.raised.toLocaleString()} raised
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ${appeal.target.toLocaleString()} goal
                    </span>
                  </div>
                  <div className="progress-bar h-3">
                    <div 
                      className="progress-fill"
                      style={{ width: `${calculateProgress(appeal.raised, appeal.target)}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-medium text-success">
                      {calculateProgress(appeal.raised, appeal.target).toFixed(0)}% funded
                    </span>
                    <div className="flex items-center text-sm text-urgent">
                      <Clock className="w-4 h-4 mr-1" />
                      {appeal.daysLeft} days left
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="btn-urgent w-full">
                  <Target className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-urgent text-urgent hover:bg-urgent hover:text-white">
            View All Urgent Appeals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgentAppealsSection;