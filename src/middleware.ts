// Middleware for Flashbots RPC monitoring and MEV protection headers

import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();

    // Add Flashbots MEV protection headers
    res.headers.set('X-Flashbots-Protect', 'true');
    res.headers.set('X-MEV-Protection', 'enabled');

    return res;
}