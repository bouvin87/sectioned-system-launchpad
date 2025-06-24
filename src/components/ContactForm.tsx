
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, { message: t('contact.form.nameRequired') }),
    email: z.string().email({ message: t('contact.form.emailInvalid') }),
    company: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(1, { message: t('contact.form.messageRequired') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: t('contact.defaultSubject'),
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', values);
      
      toast({
        title: t('contact.form.success'),
        description: t('contact.form.success'),
      });
      
      form.reset({
        name: "",
        email: "",
        company: "",
        subject: t('contact.defaultSubject'),
        message: "",
      });
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary-blue mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">E-post</p>
                      <p className="text-slate-600">info@systembysections.se</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary-blue mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Telefon</p>
                      <p className="text-slate-600">+46 8 123 456 78</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-blue mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Adress</p>
                      <p className="text-slate-600">Stockholm, Sverige</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Varför välja oss?</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• 14 dagars gratis provperiod</li>
                  <li>• Inga dolda avgifter</li>
                  <li>• Svenskt företag</li>
                  <li>• GDPR-efterlevnad</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Skicka meddelande</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.name')}</FormLabel>
                          <FormControl>
                            <Input placeholder="Ditt namn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input placeholder="din@epost.se" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.company')} (valfritt)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ditt företag" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.subject')}</FormLabel>
                          <FormControl>
                            <Input placeholder="Ämne för ditt meddelande" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Berätta om dina behov och hur vi kan hjälpa dig..."
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary-blue hover:bg-blue-700 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
