import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

export async function GET({ params }) {
    const id = Number(params.id);
    const rows = await db`SELECT * FROM activities WHERE id = ${id}`;
    // @ts-ignore
    return rows.rowCount === 0 ? error(404, 'Not found') : json(rows[0])
}