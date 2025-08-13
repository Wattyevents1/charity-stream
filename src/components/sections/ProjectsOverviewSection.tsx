import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Droplets, Home, Heart, Gift, Utensils, Wrench } from "lucide-react";
import waterWellImage from "@/assets/water-well.jpg";
import mosqueImage from "@/assets/mosque-construction.jpg";

const ProjectsOverviewSection = () => {
  const projects = [
    {
      id: 1,
      title: "Orphan Sponsorship",
      description: "Provide loving care, education, and support for orphaned children worldwide.",
      icon: Heart,
      image: null,
      beneficiaries: "2,500+ children",
      impact: "Education & Care",
      href: "/projects/orphan-sponsorship"
    },
    {
      id: 2,
      title: "Water Well Construction",
      description: "Build sustainable water sources in communities lacking access to clean water.",
      icon: Droplets,
      image: waterWellImage,
      beneficiaries: "50,000+ people",
      impact: "Clean Water Access",
      href: "/projects/water-wells"
    },
    {
      id: 3,
      title: "Masjid Construction",
      description: "Establish community centers of worship and learning in underserved areas.",
      icon: Home,
      image: mosqueImage,
      beneficiaries: "75+ communities",
      impact: "Spiritual Centers",
      href: "/projects/mosque-construction"
    },
    {
      id: 4,
      title: "Qurbani Distribution",
      description: "Seasonal meat distribution program during Islamic holidays for needy families.",
      icon: Gift,
      image: null,
      beneficiaries: "15,000+ families",
      impact: "Holiday Support",
      href: "/projects/qurbani"
    },
    {
      id: 5,
      title: "Food Pack Distribution",
      description: "Monthly food packages providing essential nutrition for vulnerable households.",
      icon: Utensils,
      image: null,
      beneficiaries: "8,000+ families",
      impact: "Food Security",
      href: "/projects/food-distribution"
    },
    {
      id: 6,
      title: "Water Well Repair",
      description: "Maintenance and rehabilitation of existing water infrastructure.",
      icon: Wrench,
      image: null,
      beneficiaries: "25,000+ people",
      impact: "Infrastructure",
      href: "/projects/well-repair"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Impact Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive initiatives designed to address the most pressing needs of communities 
            worldwide through sustainable development and humanitarian aid.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="card-hover border-0 shadow-lg overflow-hidden group">
                {/* Project Image or Icon Background */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full hero-gradient flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Beneficiaries</p>
                      <p className="font-semibold text-primary">{project.beneficiaries}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Focus Area</p>
                      <p className="font-semibold text-primary">{project.impact}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white border-primary text-primary transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="btn-hero text-lg px-8 py-4">
            Explore All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverviewSection;