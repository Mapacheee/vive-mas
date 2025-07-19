import { json, error } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { v4 as uuid } from 'uuid';

export async function POST({ request }) {
    const form = await request.formData();
    const file = form.get('file') as File;
    if (!file || !file.type.startsWith('image/')) {
        throw error(400, 'Imagen requerida');
    }

    const fileName = `${uuid()}.${file.name.split('.').pop()}`;
    const { url } = await put(`uploads/${fileName}`, file, {
        access: 'public',
    });

    return json({ url });
}