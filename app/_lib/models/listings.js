import db from '../database/db.js';

export const getAll = () => {
    const listings = db.prepare(/*sql*/`SELECT * FROM products`);
    return listings.all();
}