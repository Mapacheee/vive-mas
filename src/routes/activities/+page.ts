import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('/api/activities');
    if (!res.ok) return { activities: [] };
    const activities = await res.json();
    return { activities };
};