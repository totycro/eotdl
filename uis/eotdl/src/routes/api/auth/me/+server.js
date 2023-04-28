import { verifyToken } from "$lib/auth/auth0";
import cookie from "cookie";

export async function GET(event) {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  console.log(cookies);
  if (cookies?.id_token) {
    try {
      const user = await verifyToken(cookies.id_token);
      console.log(user);
      if (!user)  return new Response('unauthorized', {status: 401})
      return new Response(JSON.stringify(user))
    } catch (error) {
      return new Response('unauthorized', {status: 401})
    }
  }
  return new Response('unauthorized', {status: 401})
}
  