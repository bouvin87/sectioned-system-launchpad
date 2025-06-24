import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const {
    t
  } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-blue text-white">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            {t('hero.title')}{" "}
            <span className="text-accent-yellow">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-100 mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('pricing')}
              className="bg-accent-yellow hover:bg-yellow-400 text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('pricing')}
              className="border-2 border-white hover:bg-white px-8 py-4 text-lg font-semibold transition-all duration-300 text-slate-900"
            >
              {t('hero.seePricing')}
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-yellow">500+</div>
              <div className="text-slate-200">{t('hero.stats.companies')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-yellow">50k+</div>
              <div className="text-slate-200">{t('hero.stats.checklists')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-yellow">99.9%</div>
              <div className="text-slate-200">{t('hero.stats.uptime')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-yellow">24/7</div>
              <div className="text-slate-200">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
