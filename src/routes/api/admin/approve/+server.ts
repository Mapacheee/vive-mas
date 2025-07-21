import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

export async function POST({ request }) {
    const { id, approve } = await request.json();

    if (!approve) {
        await prisma.pending.delete({ where: { id } });
        return json({ ok: true });
    }

    const pending = await prisma.pending.findUnique({ where: { id } });
    if (!pending) return error(404, 'Not found');

    await prisma.activities.create({ data: pending });
    await prisma.pending.delete({ where: { id } });

    return json({ ok: true });
}