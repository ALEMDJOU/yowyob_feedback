import en from '../locales/en.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json';
import de from '../locales/de.json';

export type Locale = 'fr' | 'en' | 'es' | 'de';

export const SUPPORTED_LOCALES: Locale[] = ['fr', 'en', 'es', 'de'];

export const MESSAGES: Record<Locale, Record<string, any>> = {
  en,
  fr,
  es,
  de,
};

export function isSupportedLocale(l: string): l is Locale {
  return (['fr', 'en', 'es', 'de'] as string[]).includes(l);
}
