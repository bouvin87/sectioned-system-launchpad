
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-text-blue mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            No hidden fees, no per-user charges. Pay only for what you use.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-slate-200 hover:border-primary-blue transition-colors">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-dark-text-blue">Platform Access</CardTitle>
              <div className="text-5xl font-bold text-dark-text-blue mt-4">
                199 <span className="text-xl text-gray-text">SEK/month</span>
              </div>
              <p className="text-gray-text">Per company (tenant)</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Full platform access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Unlimited users</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">24/7 support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">GDPR compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-accent-yellow bg-accent-yellow/5 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-yellow text-dark-text-blue px-4 py-1 rounded-full text-sm font-semibold">
                Pay per module
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-dark-text-blue">Active Modules</CardTitle>
              <div className="text-5xl font-bold text-dark-text-blue mt-4">
                59 <span className="text-xl text-gray-text">SEK/month</span>
              </div>
              <p className="text-gray-text">Per active module</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Checklists module</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Deviation tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Maintenance management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-turquoise-green" />
                  <span className="text-dark-text-blue">Issue reporting</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 text-lg font-semibold"
          >
            Start Free Trial
          </Button>
          <p className="text-gray-text mt-4">14-day free trial, no credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
