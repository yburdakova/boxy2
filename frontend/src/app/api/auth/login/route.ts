import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { authCode } = await req.json();

    if (!authCode) {
      return NextResponse.json({ error: "AuthCode is required" }, { status: 400 });
    }

    // Real API
    /*
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authCode }),
    });

    if (!res.ok) {
      return NextResponse.json(await res.json(), { status: res.status });
    }

    const user = await res.json();
    return NextResponse.json(user, { status: 200 });
    */

    // Mock API
    const validAuthCode = "123456"; 

    if (authCode !== validAuthCode) {
      return NextResponse.json({ error: "Invalid Auth Code" }, { status: 401 });
    }

    const fakeUser = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      role: 1,
      isActive: true,
    };

    return NextResponse.json(fakeUser, { status: 200 });

  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
