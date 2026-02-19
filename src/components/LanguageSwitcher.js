import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

const FlagUS = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="16" height="12" fill="#B22234"/>
    <path d="M0 1.5h16M0 3h16M0 4.5h16M0 6h16M0 7.5h16M0 9h16M0 10.5h16" stroke="white" strokeWidth="1"/>
    <rect width="7" height="6" fill="#3C3B6E"/>
  </svg>
);

const FlagES = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="16" height="12" fill="#AA151B"/>
    <rect y="3" width="16" height="6" fill="#F1BF00"/>
  </svg>
);

const FlagDE = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="16" height="4" fill="#000"/>
    <rect y="4" width="16" height="4" fill="#D00"/>
    <rect y="8" width="16" height="4" fill="#FFCE00"/>
  </svg>
);

const FlagPT = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="16" height="12" fill="#FF0000"/>
    <rect width="6" height="12" fill="#006600"/>
  </svg>
);

const FlagFR = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="5.33" height="12" fill="#002395"/>
    <rect x="5.33" width="5.33" height="12" fill="#FFF"/>
    <rect x="10.66" width="5.34" height="12" fill="#ED2939"/>
  </svg>
);

const FlagEO = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
    <rect width="16" height="12" fill="#009900"/>
    <path d="M4 1.5L4.5 3.2L6.2 3.2L4.9 4.2L5.4 5.9L4 4.9L2.6 5.9L3.1 4.2L1.8 3.2L3.5 3.2L4 1.5Z" fill="#FFF"/>
  </svg>
);

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', Flag: FlagUS },
    { code: 'es', name: 'ES', Flag: FlagES },
    { code: 'de', name: 'DE', Flag: FlagDE },
    { code: 'pt', name: 'PT', Flag: FlagPT },
    { code: 'fr', name: 'FR', Flag: FlagFR },
    { code: 'eo', name: 'EO', Flag: FlagEO }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher">
      <currentLang.Flag />
      <select 
        value={i18n.language} 
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
