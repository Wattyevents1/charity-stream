import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDonateButton = () => {
  return (
    <Button className="floating-donate group">
      <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
      Donate Now
    </Button>
  );
};

export default FloatingDonateButton;