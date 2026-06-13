import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import {
  getRescheduleNotifySummary,
  sendFutureAiRescheduleUpdates,
} from '@/lib/event-reschedule-notify';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const summary = await getRescheduleNotifySummary();
  return NextResponse.json({ ok: true, ...summary });
}

export async function POST(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await req.json().catch(() => ({}))) as {
      dryRun?: boolean;
      resend?: boolean;
    };

    const report = await sendFutureAiRescheduleUpdates({
      dryRun: body.dryRun === true,
      resend: body.resend === true,
    });

    return NextResponse.json({ ok: true, report });
  } catch (e) {
    console.error('reschedule notify:', e);
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : 'Send failed' },
      { status: 500 }
    );
  }
}
