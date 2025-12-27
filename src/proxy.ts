import { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

const handleI18nRouting = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const i18nRouting = handleI18nRouting(request);
  return i18nRouting;
}

export const config = {
  matcher: ['/(tr|en)/:path*', '/((?!api|remote-api|_next|.*\\..*).*)'],
};
