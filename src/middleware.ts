import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Note: In a real app with JWT, we would decode the JWT here to check roles.
// Since standard Next.js edge middleware can't use 'jsonwebtoken', 
// we typically use 'jose' or just check for token existence.
// For now, we will simply check if a token exists for protection.

export function middleware(request: NextRequest) {
  const token = request.cookies.get('quikey_access_token');
  const path = request.nextUrl.pathname;

  // Protect /super-admin routes
  if (path.startsWith('/super-admin') && !path.startsWith('/super-admin-login')) {
    if (!token) {
      return NextResponse.redirect(new URL('/super-admin-login', request.url));
    }
  }

  // Protect /dashboard routes
  if (path.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Prevent logged-in users from seeing login pages
  if ((path === '/login' || path === '/super-admin-login') && token) {
    if (path === '/super-admin-login') {
      return NextResponse.redirect(new URL('/super-admin/dashboard', request.url));
    }
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/super-admin/:path*',
    '/login',
    '/super-admin-login'
  ],
};
