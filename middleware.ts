import "reflect-metadata";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TokenService } from "./src/domain/services/TokenService";
import { DIContainer } from "./src/core/di/di-container";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/callback")) {
    const code = request.nextUrl.searchParams.get("code") || "";

    const { access_token, refresh_token } = await DIContainer.resolve(
      TokenService
    ).execute(code);

    const response = NextResponse.next();
    response.cookies.set("access_token", access_token, { secure: true });
    response.cookies.set("refresh_token", refresh_token, { secure: true });

    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/callback",
};
