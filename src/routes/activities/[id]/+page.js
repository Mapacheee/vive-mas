export async function load({ params, fetch }) {
    const response = await fetch('/src/lib/activities.json');
    const activities = await response.json();
    const activity = activities.find((/** @type {{ id: { toString: () => any; }; }} */ a) =>
                                    a.id.toString() === params.id) || null;

    return {
        props: {
            activity
        }
    };
}