import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

export async function GET() {
    const rows = db.prepare('SELECT * FROM pending ORDER BY createdAt DESC').all();
    return json(rows);
}