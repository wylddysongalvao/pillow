'use server';

import acceptLanguage from 'accept-language';
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

acceptLanguage.languages(['en', 'pt-br']);

const bestMatchingLanguage = async () => {
  const headerList = await headers();
  const header = headerList.get('accept-language');
  return acceptLanguage.get(header);
};

export default getRequestConfig(async () => {
  const locale = (await bestMatchingLanguage()!) || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
