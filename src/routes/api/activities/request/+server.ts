import { json, error } from '@sveltejs/kit';
import { sql } from '$lib/server/db';

export async function POST({ request }) {
    const b = await request.json();
    const { title, location, imageUrl, description, schedule,
        address, organizer, contact, website, maxParticipants } = b;

    if (!title || !location || !imageUrl || !description ||
        !schedule || !address || !organizer || !contact || !website || maxParticipants <= 0)
        throw error(400, 'Faltan campos o inválidos');

    if (new Date(schedule) <= new Date()) throw error(400, 'Fecha futura obligatoria');

    await sql`
    INSERT INTO pending (title, location, imageUrl, description,
                         schedule, address, organizer, contact, website, maxParticipants)
    VALUES (${title}, ${location}, ${imageUrl}, ${description},
            ${schedule}, ${address}, ${organizer}, ${contact}, ${website}, ${maxParticipants})
  `;
    return json({ ok: true });
}