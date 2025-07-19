import { json, error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';

export async function POST({ request }) {
    const form = await request.formData();
    const file = form.get('file') as File;
    if (!file || !file.type.startsWith('image/')) throw error(400, 'Imagen requerida');

    const ext = path.extname(file.name);
    const fileName = `${uuid()}${ext}`;
    const uploadDir = 'static/uploads';
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    fs.writeFileSync(path.join(uploadDir, fileName), Buffer.from(bytes));

    return json({ url: `/uploads/${fileName}` });
}