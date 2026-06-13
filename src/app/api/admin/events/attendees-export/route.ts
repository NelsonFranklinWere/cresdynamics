import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import {
  attendeesToCsv,
  listFutureAiAttendeesForReschedule,
} from '@/lib/event-reschedule-notify';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await listFutureAiAttendeesForReschedule();
  const csv = attendeesToCsv(rows);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="future-ai-attendees-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
