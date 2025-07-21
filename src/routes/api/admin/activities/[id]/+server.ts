import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

// @ts-ignore
export async function DELETE({ params }) {
    const id = Number(params.id);
    if (isNaN(id)) return error(400, 'Invalid id');

    const exists = await prisma.activities.findUnique({ where: { id } });
    if (!exists) return error(404, 'Not found');

    await prisma.activities.delete({ where: { id } });
    return json({ ok: true });
}