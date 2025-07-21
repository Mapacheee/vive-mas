import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

export async function GET() {
    const rows = await prisma.activities.findMany({ orderBy: { createdAt: 'desc' } });
    return json(rows);
}