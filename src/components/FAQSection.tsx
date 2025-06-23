
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.questions.freeTrial.question'),
      answer: t('faq.questions.freeTrial.answer')
    },
    {
      question: t('faq.questions.addModules.question'),
      answer: t('faq.questions.addModules.answer')
    },
    {
      question: t('faq.questions.powerBi.question'),
      answer: t('faq.questions.powerBi.answer')
    },
    {
      question: t('faq.questions.dataCancel.question'),
      answer: t('faq.questions.dataCancel.answer')
    },
    {
      question: t('faq.questions.userLimit.question'),
      answer: t('faq.questions.userLimit.answer')
    },
    {
      question: t('faq.questions.support.question'),
      answer: t('faq.questions.support.answer')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('faq.subtitle')}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-primary-blue transition-colors">
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
