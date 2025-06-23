
import { CheckCircle } from "lucide-react";

const benefits = [
  "Modular and scalable - Add modules as you grow",
  "No per-user fees - Unlimited team members included",
  "Built for production teams - Designed by manufacturing experts",
  "Supports modern digitalization - Cloud-first architecture",
  "Powerful API for custom integrations - Connect with any system",
  "Secure and GDPR compliant - Enterprise-grade security"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-text-blue mb-6">
              Why choose System by Sections?
            </h2>
            <p className="text-xl text-slate-600">
              Built specifically for manufacturing teams who want to digitize without complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <div className="bg-primary-blue/10 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary-blue" />
                </div>
                <p className="text-dark-text-blue font-medium leading-relaxed">
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
