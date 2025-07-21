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

    await prisma.pending.create({
        data: {
            title: pending.title,
            location: pending.location,
            imageUrl: pending.imageUrl,
            description: pending.description,
            schedule: pending.schedule,
            address: pending.address,
            organizer: pending.organizer,
            contact: pending.contact,
            website: pending.website,
            maxParticipants: pending.maxParticipants
        }
    });

    await prisma.pending.delete({ where: { id } });
    return json({ ok: true });
}