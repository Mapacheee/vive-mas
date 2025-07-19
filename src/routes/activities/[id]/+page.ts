import type { PageLoad } from './$types';
import { db } from '$lib/server/db.js';

export const load: PageLoad = async ({ params }) => {
    const id = Number(params.id);
    if (isNaN(id)) return { activity: null };

    const stmt = db.prepare(`
    SELECT * FROM activities WHERE id = ?
  `);
    const activity = stmt.get(id) ?? null;

    return { activity };
};