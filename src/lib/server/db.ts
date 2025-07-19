//import Database from 'better-sqlite3';
import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

const dbFile = dev ? 'prisma/dev.db' : 'prisma/prod.db';

//export const db = new Database(dbFile);
//db.pragma('journal_mode = WAL'); this for use sqlite

export const db = drizzle(sql);


