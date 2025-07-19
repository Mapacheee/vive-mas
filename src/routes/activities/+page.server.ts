import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db.js';

export const load: PageServerLoad = async ({ params }) => {
    const id = Number(params.id);
    if (isNaN(id)) return { activity: null };

    const activity = db.prepare('SELECT * FROM activities WHERE id = ?').get(id) ?? null;
    return { activity };
};