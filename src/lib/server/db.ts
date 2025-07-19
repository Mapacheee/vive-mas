import Database from 'better-sqlite3';
import { dev } from '$app/environment';

const dbFile = dev ? 'prisma/dev.db' : 'prisma/prod.db';
export const db = new Database(dbFile);
db.pragma('journal_mode = WAL');