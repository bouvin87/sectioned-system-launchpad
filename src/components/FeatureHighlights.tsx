
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Settings, MessageSquare, BarChart2, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';

const FeatureHighlights = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: CheckCircle,
      title: t('features.smartChecklists.title'),
      description: t('features.smartChecklists.description')
    },
    {
      icon: AlertTriangle,
      title: t('features.deviationTracking.title'),
      description: t('features.deviationTracking.description')
    },
    {
      icon: Settings,
      title: t('features.maintenanceManagement.title'),
      description: t('features.maintenanceManagement.description')
    },
    {
      icon: MessageSquare,
      title: t('features.issueReporting.title'),
      description: t('features.issueReporting.description')
    },
    {
      icon: BarChart2,
      title: t('features.dashboards.title'),
      description: t('features.dashboards.description')
    },
    {
      icon: Zap,
      title: t('features.apiIntegration.title'),
      description: t('features.apiIntegration.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-blue"
            >
              <CardContent className="p-8">
                <div className="bg-primary-blue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-blue/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
