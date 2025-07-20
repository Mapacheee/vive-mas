import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';
import { sql } from '@vercel/postgres';

export async function POST({ request }) {
    const body = await request.json();
    const { title, location, imageUrl, description, schedule,
        address, organizer, contact, website, maxParticipants } = body;

    if (!title || !location || !imageUrl || !description
        || !schedule || !address || !organizer || !contact || !website || maxParticipants <= 0)
        throw error(400, 'Faltan campos o inválidos');

    const scheduleDate = new Date(schedule);
    if (scheduleDate <= new Date()) throw error(400, 'La fecha debe ser futura');

    // @ts-ignore
    await db.execute(sql`
    INSERT INTO pending (title, location, imageUrl, description, 
                         schedule, address, organizer, contact, website, maxParticipants)
    VALUES (${title}, ${location}, ${imageUrl}, ${description}, 
            ${schedule}, ${address}, ${organizer}, ${contact}, ${website}, ${maxParticipants})
  `);

    return json({ ok: true });
}