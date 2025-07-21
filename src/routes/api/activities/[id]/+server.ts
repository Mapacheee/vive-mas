import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

export async function GET({ params }) {
    const id = Number(params.id);
    if (isNaN(id)) return error(400, 'Invalid id');

    const activity = await prisma.activities.findUnique({
        where: { id }
    });

    return activity ? json(activity) : error(404, 'Not found');
}