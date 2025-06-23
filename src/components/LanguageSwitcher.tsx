
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={i18n.language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="text-sm"
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'sv' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('sv')}
        className="text-sm"
      >
        SV
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
