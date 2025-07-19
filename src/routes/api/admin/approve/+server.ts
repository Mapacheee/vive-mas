import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

// @ts-ignore
export async function POST({ request }) {
    const { id, approve } = await request.json();
    if (typeof id !== 'number' || typeof approve !== 'boolean') throw error(400);

    const pending = db.prepare('SELECT * FROM pending WHERE id = ?').get(id);
    if (!pending) throw error(404, 'No encontrado');

    if (approve) {
        db.prepare(`
      INSERT INTO activities (title, location, imageUrl, description, schedule, address, organizer, contact, website, maxParticipants)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(// @ts-ignore
            pending.title, pending.location, pending.imageUrl, pending.description,
            // @ts-ignore
            pending.schedule, pending.address, pending.organizer, pending.contact,
            // @ts-ignore
            pending.website, pending.maxParticipants
        );
    }

    db.prepare('DELETE FROM pending WHERE id = ?').run(id);
    return json({ ok: true });
}