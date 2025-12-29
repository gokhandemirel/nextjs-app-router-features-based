'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function useAppRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const normalizePath = (path: string) => {
    if (path.startsWith(`/${locale}`)) return path;
    return `/${locale}`;
  };

  const push = (path: string) => {
    router.push(normalizePath(path));
  };

  const replace = (path: string) => {
    router.replace(normalizePath(path));
  };

  const back = () => router.back();

  const refresh = () => router.refresh();

  const getQuery = (key: string) => {
    return searchParams.get(key);
  };

  return {
    router,
    pathname,
    searchParams,
    push,
    replace,
    back,
    refresh,
    getQuery
  };
}
