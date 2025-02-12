import { auth } from '@/auth';

export const middleware = auth((req) => {
  if (!req.auth && !req.nextUrl.pathname.startsWith('/auth')) {
    const newUrl = new URL('/auth/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
