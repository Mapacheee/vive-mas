import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

import { dev } from '$app/environment';
console.log('[SQLite] Opening', dev ? 'prisma/dev.db' : 'prisma/prod.db');

// @ts-ignore
export async function POST({ request }) {
    const body = await request.json();
    const { title, location, imageUrl, description, schedule, address,
        organizer, contact, website, maxParticipants } = body;

    if (!title || !location || !imageUrl || !description ||
        !schedule || !address || !organizer || !contact || !website || maxParticipants <= 0)
        throw error(400, 'faltan campos o inválidos');

    const scheduleDate = new Date(schedule);
    if (scheduleDate <= new Date()) throw error(400, 'La fecha debe ser futura');

    const insert = db.prepare(`
    INSERT INTO pending (title, location, imageUrl, description, schedule, address, 
                         organizer, contact, website, maxParticipants)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
    insert.run(title, location, imageUrl, description, schedule, address, organizer, contact, website, maxParticipants);

    return json({ ok: true });
}