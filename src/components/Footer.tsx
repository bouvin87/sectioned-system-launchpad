
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="about" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t('header.title')}</h3>
            <p className="text-slate-300 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.login')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.documentation')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.apiReference')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                {t('footer.gdprCompliance')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
