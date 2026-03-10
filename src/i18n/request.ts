import { getRequestConfig } from 'next-intl/server';
import { SUPPORTED_LOCALES } from '@/i18n/locales';
import getLocaleFromPath from '@/i18n/utils';

export default getRequestConfig(async (req: unknown) => {
  let locale = 'en';

  try {
    const anyReq: any = req;

    // Prefer NextRequest.nextUrl.pathname when available
    let pathname = '';
    if (anyReq?.nextUrl?.pathname) {
      pathname = anyReq.nextUrl.pathname;
    } else if (typeof anyReq?.url === 'string') {
      const raw = anyReq.url;
      if (raw.startsWith('http')) {
        // absolute URL
        pathname = new URL(raw).pathname;
      } else {
        // relative path
        pathname = raw.startsWith('/') ? raw : `/${raw}`;
      }
    } else if (anyReq?.headers && typeof anyReq.headers.get === 'function') {
      // fallback: try to read an original path header if present
      const forwarded = anyReq.headers.get('x-forwarded-path') || anyReq.headers.get('x-original-url');
      if (forwarded) pathname = forwarded.startsWith('/') ? forwarded : `/${forwarded}`;
    }

    if (pathname) {
      const detected = getLocaleFromPath(pathname);
      if (detected) locale = detected;
    }
  } catch (e) {
    // ignore and fall back to default locale
  }

  const messages = (await import(`../locales/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
