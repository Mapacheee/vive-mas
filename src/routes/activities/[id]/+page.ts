import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

// @ts-ignore
export async function GET({ params }) {
    const id = Number(params.id);
    if (isNaN(id)) throw error(400, 'Invalid id');

    const activity = db.prepare('SELECT * FROM activities WHERE id = ?').get(id);
    if (!activity) throw error(404, 'Not found');

    return json(activity);
}