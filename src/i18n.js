// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos separados
import { common } from './common.js';
import { steps } from './steps.js';
import { cotizacionForm } from './cotizacionForm.js';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      us: {
        translation: {
          ...cotizacionForm.us,  // Combina las traducciones de steps
          ...common.us,  // Combina las traducciones comunes
          ...steps.us
        }
      },
      es: {
        translation: {
          ...cotizacionForm.es,  // Combina las traducciones de steps
          ...common.es,
          ...steps.es
          // Combina las traducciones comunes
        }
      }
    },
    lng: 'es', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
