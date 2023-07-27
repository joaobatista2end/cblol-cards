import { NextResponse } from "next/server";
import { TEAM_PLAYERS } from "../../players/mock";

export async function GET () {
  return NextResponse.json({ teams: TEAM_PLAYERS });
}