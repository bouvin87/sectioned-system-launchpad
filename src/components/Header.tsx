
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="System by Sections Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-900">
              {t('header.title')}
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-slate-700 hover:text-primary-blue transition-colors font-medium"
            >
              {t('header.features')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-slate-700 hover:text-primary-blue transition-colors font-medium"
            >
              {t('header.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-700 hover:text-primary-blue transition-colors font-medium"
            >
              {t('header.about')}
            </button>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" className="text-slate-700 hover:text-primary-blue hover:bg-slate-100">
              {t('header.login')}
            </Button>
            <Button className="bg-primary-blue hover:bg-blue-700 text-white">
              {t('header.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-primary-blue transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-slate-700 hover:text-primary-blue transition-colors font-medium py-2"
              >
                {t('header.features')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left text-slate-700 hover:text-primary-blue transition-colors font-medium py-2"
              >
                {t('header.pricing')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-slate-700 hover:text-primary-blue transition-colors font-medium py-2"
              >
                {t('header.about')}
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
                <Button variant="ghost" className="justify-start text-slate-700 hover:text-primary-blue hover:bg-slate-100">
                  {t('header.login')}
                </Button>
                <Button className="bg-primary-blue hover:bg-blue-700 text-white">
                  {t('header.getStarted')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
