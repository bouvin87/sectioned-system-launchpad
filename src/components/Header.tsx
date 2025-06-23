
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

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
            <span className="text-xl font-bold text-slate-900">
              {t('header.title')}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-primary-blue transition-colors font-medium">
              {t('header.features')}
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-primary-blue transition-colors font-medium">
              {t('header.pricing')}
            </a>
            <a href="#about" className="text-slate-700 hover:text-primary-blue transition-colors font-medium">
              {t('header.about')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" className="text-slate-700 hover:text-primary-blue hover:bg-slate-100">
              {t('header.login')}
            </Button>
            <Button className="bg-primary-blue hover:bg-blue-700 text-white">
              {t('header.getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
