import { NextResponse } from "next/server";

// This will later connect to your prediction bot's data
// For now, returns demo data so the dashboard works immediately

export async function GET() {
  // TODO: Read from your sports-prediction-bot/data/output/predictions-{date}.json
  // For now, return demo data
  return NextResponse.json({
    date: new Date().toISOString().split("T")[0],
    predictions: [],
    message: "Connect to your prediction bot data directory to load real predictions",
  });
}
