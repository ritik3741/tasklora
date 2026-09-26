import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.frankfurter.app";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const endpoint = searchParams.get("endpoint") || "latest";
  const amount = searchParams.get("amount") || "1";
  const from = searchParams.get("from") || "USD";
  const to = searchParams.get("to") || "EUR";

  // Build the upstream URL
  const upstreamUrl = `${BASE_URL}/${endpoint}?amount=${amount}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

  try {
    const res = await fetch(upstreamUrl, {
      next: {
        revalidate: endpoint === "latest" ? 600 : 86400,
      },
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
