import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export function middleware(request: NextRequest) {
  const { userId, sessionId, getToken } = getAuth(request);

  if (!userId) {
    return NextResponse.redirect('/login');
  }

  // Add role-based access control logic here
  // For example, restrict access to admin pages
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/admin') && !isAdmin(userId)) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}

function isAdmin(userId: string): boolean {
  // Implement your logic to check if the user is an admin
  // This is a placeholder function
  return userId === 'admin-user-id';
}

export const config = {
  matcher: ['/admin/:path*'],
};