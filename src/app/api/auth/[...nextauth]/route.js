import NextAuth from "next-auth";
import { options } from '@/app/api/auth/options';


// Named exports for GET and POST requests
export async function GET(req, res) {
    const handler = NextAuth(options);
    return await handler(req, res);
}

export async function POST(req, res) {
    const handler = NextAuth(options);
    return await handler(req, res);
}
