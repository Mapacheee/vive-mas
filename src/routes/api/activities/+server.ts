import { json } from '@sveltejs/kit';
import { sql } from '$lib/server/db';

export async function GET() {
    const rows = await sql`SELECT * FROM activities ORDER BY createdAt DESC`;
    return json(rows.rows);
}