import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(request) {
        if (request.nextUrl.pathname.startsWith('/auth') && request.nextauth.token) {

            return NextResponse.redirect(new URL('/', request.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === 'user' || token?.role === 'admin' || token?.role === 'manager',
        },
        pages: {
            'signIn': '/auth/login'
        },
    }
)


export const config = {
    matcher: ['/', '/admin/:path*']
}

