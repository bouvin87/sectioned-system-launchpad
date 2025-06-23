
import { CheckCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    t('benefits.modular'),
    t('benefits.noPerUser'),
    t('benefits.builtForProduction'),
    t('benefits.modernDigitalization'),
    t('benefits.powerfulApi'),
    t('benefits.secure')
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('benefits.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <div className="bg-turquoise-green/10 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                </div>
                <p className="text-slate-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
