import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/apis/authMiddleware";

export const config = {
  Matcher: "/api/:path*",
};

export default function middleware(request: Request) {
  const authResult = authMiddleware(request);
  if (!authResult?.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
}
return NextResponse.next();
