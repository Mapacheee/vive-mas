import { readable } from 'svelte/store';
import type { Activity } from '$lib/types';

export const activities = readable<Activity[]>([], (set) => {
    fetch('/api/activities')
        .then(r => r.json())
        .then(set);
});