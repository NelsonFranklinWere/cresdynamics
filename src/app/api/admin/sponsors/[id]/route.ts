import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import { getSponsorSlotSummary, updateSponsorApplicationFields } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  status?: string;
  notes?: string | null;
};

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
    const body = (await req.json()) as Body;
    const patch: { status?: string; notes?: string | null } = {};
    if (body.status !== undefined) patch.status = body.status;
    if (body.notes !== undefined) patch.notes = body.notes;

    const ok = await updateSponsorApplicationFields(id, patch);
    if (!ok) {
      return NextResponse.json({ ok: false, error: 'Nothing to update or invalid status.' }, { status: 400 });
    }
    const slotSummary = (await getSponsorSlotSummary()) ?? {
      totalApplications: 0,
      goldRemaining: 1,
      silverRemaining: 3,
      communityRemaining: 10,
    };
    return NextResponse.json({ ok: true, slotSummary });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Update failed' },
      { status: 500 }
    );
  }
}
