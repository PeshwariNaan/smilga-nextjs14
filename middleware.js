// If this function is exported, it will be run before every request in every route with the most basic setup.
// export function middleware() {
//   //   console.log('this is middleware')
//   return Response.json({ data: 'thello there' })
// }

import { NextResponse } from 'next/server'

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
}

// We can control which routes the middleware runs on by using matchers.
// export const config = {
//   matcher: '/about',
// }

//Restricting more than one route
export const config = {
  matcher: ['/about/:path*', '/tasks/:path*'],
}
