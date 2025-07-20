import { json, error } from '@sveltejs/kit';
import { prisma } from '$lib/server/db.js';

export async function POST({ request }) {
    const body = await request.json();
    const { title, location, imageUrl, description, schedule,
        address, organizer, contact, website, maxParticipants } = body;

    if (!title || !location || !imageUrl || !description ||
        !schedule || !address || !organizer || !contact || !website || maxParticipants <= 0)
        throw error(400, 'Faltan campos o inválidos');

    if (new Date(schedule) <= new Date()) throw error(400, 'La fecha debe ser futura');

    await prisma.pending.create({
        data: { title, location, imageUrl, description, schedule,
            address, organizer, contact, website, maxParticipants }
    });

    return json({ ok: true });
}