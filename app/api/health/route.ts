import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      service: 'viva-floripa',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
