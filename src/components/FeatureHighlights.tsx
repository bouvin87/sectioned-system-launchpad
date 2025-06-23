
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Settings, MessageSquare, BarChart2, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Smart Checklists",
    description: "Digital checklists for daily routines with progress tracking and automated reminders."
  },
  {
    icon: AlertTriangle,
    title: "Deviation Tracking",
    description: "Log and trace deviations with full audit trails and corrective action workflows."
  },
  {
    icon: Settings,
    title: "Maintenance Management",
    description: "Schedule preventive maintenance and track equipment performance in real-time."
  },
  {
    icon: MessageSquare,
    title: "Issue Reporting",
    description: "Streamlined issue management with follow-up actions and resolution tracking."
  },
  {
    icon: BarChart2,
    title: "Real-time Dashboards",
    description: "Comprehensive analytics and reporting for data-driven decision making."
  },
  {
    icon: Zap,
    title: "REST API Integration",
    description: "Seamlessly connect with your existing systems through our powerful API."
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-text-blue mb-6">
            Everything you need to modernize production
          </h2>
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Our modular platform grows with your needs, providing the tools to digitize 
            every aspect of your manufacturing operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-primary-blue"
            >
              <CardContent className="p-8">
                <div className="bg-accent-yellow/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-accent-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-dark-text-blue mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
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
