import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-charity.jpg";

const HeroSection = () => {
  const [impactCount, setImpactCount] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  // Animate counters on mount
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const increment = 50;
      
      // Lives impacted: 125,000
      let currentImpact = 0;
      const impactTarget = 125000;
      const impactTimer = setInterval(() => {
        currentImpact += Math.ceil(impactTarget / (duration / increment));
        if (currentImpact >= impactTarget) {
          currentImpact = impactTarget;
          clearInterval(impactTimer);
        }
        setImpactCount(currentImpact);
      }, increment);

      // Funds raised: $2.5M
      let currentFunds = 0;
      const fundsTarget = 2500000;
      const fundsTimer = setInterval(() => {
        currentFunds += Math.ceil(fundsTarget / (duration / increment));
        if (currentFunds >= fundsTarget) {
          currentFunds = fundsTarget;
          clearInterval(fundsTimer);
        }
        setFundsRaised(currentFunds);
      }, increment);

      // Projects completed: 340
      let currentProjects = 0;
      const projectsTarget = 340;
      const projectsTimer = setInterval(() => {
        currentProjects += Math.ceil(projectsTarget / (duration / increment));
        if (currentProjects >= projectsTarget) {
          currentProjects = projectsTarget;
          clearInterval(projectsTimer);
        }
        setProjectsCompleted(currentProjects);
      }, increment);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="People helping communities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding w-full">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Building Hope,
              <span className="text-secondary block">
                Changing Lives
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Join us in creating lasting change through sustainable development, 
              education, and humanitarian aid programs that transform communities worldwide.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button className="btn-hero text-lg px-8 py-4">
              Start Donating Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-outline-white text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-counter">
            <div className="text-center md:text-left">
              <div className="impact-counter text-white">
                {formatNumber(impactCount)}+
              </div>
              <p className="text-white/80 text-lg font-medium">Lives Impacted</p>
            </div>
            <div className="text-center md:text-left">
              <div className="impact-counter text-white">
                ${formatNumber(fundsRaised)}
              </div>
              <p className="text-white/80 text-lg font-medium">Funds Raised</p>
            </div>
            <div className="text-center md:text-left">
              <div className="impact-counter text-white">
                {formatNumber(projectsCompleted)}+
              </div>
              <p className="text-white/80 text-lg font-medium">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;