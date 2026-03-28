import { NextResponse } from "next/server";

// This will later connect to your prediction bot's data
// For now, returns demo data so the dashboard works immediately

export async function GET() {
  // TODO: Read from your sports-prediction-bot/data/output/predictions-{date}.json
  // For now, return demo data
  return NextResponse.json({
    date: new Date().toISOString().split("T")[0],
    predictions: [
      {
        id: "ucl-1",
        homeTeam: "Bayer Leverkusen",
        awayTeam: "Arsenal",
        league: "Champions League",
        sport: "football",
        time: "21:00",
        predictions: [
          {
            market: "1X2",
            pick: "Away Win",
            odds: 2.25,
            confidence: 72,
            value: 8.3,
            stake: 2,
          },
          {
            market: "BTTS",
            pick: "Yes",
            odds: 1.75,
            confidence: 78,
            value: 12.1,
            stake: 2,
          },
        ],
        selected: true,
      },
    ],
    message: "Connect to your prediction bot data directory to load real predictions",
  });
}
