
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Digitize Your Production.{" "}
            <span className="text-emerald-400">Section by Section.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Modular tools for modern manufacturing. Streamline operations, 
            track deviations, and scale your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-300 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              See Pricing
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-slate-400">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">50k+</div>
              <div className="text-slate-400">Checklists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
