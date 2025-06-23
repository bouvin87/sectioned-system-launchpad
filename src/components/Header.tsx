
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2024_12_23_15_45_29_965_DSEC_LOGO_2020_RGB.png" 
              alt="System by Sections Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-dark-text-blue">
              System by Sections
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-dark-text-blue hover:text-primary-blue transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-dark-text-blue hover:text-primary-blue transition-colors font-medium">
              Pricing
            </a>
            <a href="#about" className="text-dark-text-blue hover:text-primary-blue transition-colors font-medium">
              About
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-dark-text-blue hover:text-primary-blue">
              Login
            </Button>
            <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
