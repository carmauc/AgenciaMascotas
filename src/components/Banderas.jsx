import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';

const LANGUAGE_SELECTOR_ID = 'language-selector';

const languages = [
  { key: 'us', name: 'United States' },
  { key: 'es', name: 'España' },
  // { key: 'co', name: 'Colombia' },
];

const FlagIcon = ({ countryCode }) => (
  <span className={`fi fi-${countryCode}`} style={{ marginRight: '8px' }}></span>
);

const Banderas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const selectedLanguage = languages.find(language => language.key === i18n.language) || languages[0];

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (!event.target.closest(`#${LANGUAGE_SELECTOR_ID}`)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.key);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 "
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <FlagIcon countryCode={selectedLanguage.key} />
        {selectedLanguage.name}
        <svg
          className="-me-1 ms-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
        </button>
      {isOpen && (
        <div
        className="absolute flex justify-center right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10"
        role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="block" role="none">
            {languages.map((language) => (
              <button
                key={language.key}
                onClick={() => handleLanguageChange(language)}
                className={`${
                  selectedLanguage.key === language.key
                    ? "bg-gray-900 text-white"
                    : "text-white"
                } block w-full rounded-md px-8 py-2 text-sm text-start items-center  hover:bg-gray-600`}
                role="menuitem"
              >
                <FlagIcon countryCode={language.key} />
                <span className="truncate">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default Banderas;

