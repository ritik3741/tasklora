import { NextResponse } from "next/server";

const BASE_URL = "https://api.frankfurter.app";

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/currencies`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Frankfurter API returned ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to reach the exchange rate service." },
      { status: 502 }
    );
  }
}
