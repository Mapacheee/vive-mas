import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const id = Number(params.id);
    if (isNaN(id)) return { activity: null };

    const res = await fetch(`/api/activities/${id}`);
    return { activity: res.ok ? await res.json() : null };
};