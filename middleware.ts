import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
 matcher: ["/admin", "/admin/:path*"]
}




// import NextAuth from "next-auth"
// import authConfig from "./auth.config"

// export default NextAuth(authConfig).auth((req) => {
//   // Your custom logic here
//   if (!req.auth && req.nextUrl.pathname.startsWith('/admin')) {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

// export const config = {
//  matcher: ["/admin", "/admin/:path*"]
// }
