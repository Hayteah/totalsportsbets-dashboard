import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: Trigger your sports-prediction-bot pipeline steps
  // This will run: fetch:all -> predict -> generate

  return NextResponse.json({
    success: true,
    message: "Pipeline step completed",
  });
}
