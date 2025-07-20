import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

export async function GET({ params }) {
    const id = Number(params.id);
    const rows = await prisma.pending.findMany({
        orderBy: { createdAt: 'desc' }
    });
    // @ts-ignore
    return rows.rowCount === 0 ? error(404, 'Not found') : json(rows[0])
}