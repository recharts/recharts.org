import _ from 'lodash';
import Locale, { SupportedLocale, supportedLocales } from '../locale';

export const defaultLocale = 'en-US';

export const localeGet = (locale: SupportedLocale, component: string, path: string) =>
  _.get(Locale, `${locale}.${component}.${path}`);

const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.includes(locale as SupportedLocale);
};

type LocaleProps = {
  location?: {
    pathname?: string;
  };
};

export const getLocaleType = (props: LocaleProps): SupportedLocale => {
  const pathname = (props && props.location && props.location.pathname) || '/';
  const routes = pathname.split('/');
  const locale = routes && routes.length >= 2 ? routes[1] : defaultLocale;

  if (!isSupportedLocale(locale)) {
    return defaultLocale;
  }

  return locale;
};

export const parseLocalObj = (locale: SupportedLocale, value: string | object) => {
  if (!value) {
    return '';
  }

  if (_.isObject(value)) {
    return _.get(value, `${locale}`, '') || _.get(value, 'en-US', '');
  }

  return value || '';
};
