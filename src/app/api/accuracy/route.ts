import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Read from your sports-prediction-bot tracking data
  return NextResponse.json({
    overall: 0,
    thisWeek: 0,
    avgRoi: "0%",
    byLeague: [],
    recent: [],
    message: "Connect tracking data to see real accuracy stats",
  });
}
