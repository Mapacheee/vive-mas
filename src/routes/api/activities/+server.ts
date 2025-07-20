import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export async function GET() {
    const rows = await db`SELECT * FROM activities ORDER BY createdAt DESC`;
    return json(rows);
}