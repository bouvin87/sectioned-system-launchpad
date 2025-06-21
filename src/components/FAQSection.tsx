
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
  },
  {
    question: "Can we add modules later?",
    answer: "Absolutely. Our modular approach means you can start with just the modules you need and add more as your requirements grow. You only pay for active modules."
  },
  {
    question: "How do I connect with Power BI?",
    answer: "System by Sections includes a comprehensive REST API that integrates seamlessly with Power BI. We provide detailed documentation and can assist with the setup process."
  },
  {
    question: "What happens to our data if we cancel?",
    answer: "Your data belongs to you. We provide full data export capabilities and will assist you in migrating your data if needed. We maintain backups for 90 days after cancellation."
  },
  {
    question: "Is there a limit on the number of users?",
    answer: "No, there are no user limits. You can invite unlimited team members at no additional cost. You only pay the platform fee and module fees."
  },
  {
    question: "Do you provide training and support?",
    answer: "Yes, we provide comprehensive onboarding, training materials, and 24/7 support. Our team includes manufacturing experts who understand your industry challenges."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about System by Sections
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
