
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const PricingSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-slate-200 hover:border-primary-blue transition-colors">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-slate-900">{t('pricing.platformAccess.title')}</CardTitle>
              <div className="text-5xl font-bold text-slate-900 mt-4">
                {t('pricing.platformAccess.price')} <span className="text-xl text-slate-600">{t('pricing.platformAccess.currency')}</span>
              </div>
              <p className="text-slate-600">{t('pricing.platformAccess.description')}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.platformAccess.features.fullAccess')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.platformAccess.features.unlimitedUsers')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.platformAccess.features.support')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.platformAccess.features.gdpr')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent-yellow bg-accent-yellow/5 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-yellow text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                {t('pricing.activeModules.badge')}
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-slate-900">{t('pricing.activeModules.title')}</CardTitle>
              <div className="text-5xl font-bold text-slate-900 mt-4">
                {t('pricing.activeModules.price')} <span className="text-xl text-slate-600">{t('pricing.activeModules.currency')}</span>
              </div>
              <p className="text-slate-600">{t('pricing.activeModules.description')}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.activeModules.features.checklists')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.activeModules.features.deviations')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.activeModules.features.maintenance')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-slate-800">{t('pricing.activeModules.features.issues')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            {t('pricing.startTrial')}
          </Button>
          <p className="text-slate-600 mt-4">{t('pricing.trialNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
