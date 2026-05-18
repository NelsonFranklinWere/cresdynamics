import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import { updateEventReservationBookingStatus } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { id: idStr } = await ctx.params;
  const id = Number(idStr);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ ok: false, error: 'Invalid id' }, { status: 400 });
  }

  try {
    const body = (await req.json()) as { bookingStatus?: string };
    const status = body.bookingStatus;
    if (status !== 'pending' && status !== 'paid' && status !== 'cancelled') {
      return NextResponse.json({ ok: false, error: 'Invalid booking status' }, { status: 400 });
    }

    const ok = await updateEventReservationBookingStatus(id, status);
    if (!ok) {
      return NextResponse.json({ ok: false, error: 'Reservation not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true, bookingStatus: status });
  } catch (e) {
    console.error('admin event reservation patch:', e);
    return NextResponse.json({ ok: false, error: 'Update failed' }, { status: 500 });
  }
}
