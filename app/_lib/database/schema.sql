BEGIN;

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    image TEXT,
    quantity INTEGER,
    artist TEXT,
    description TEXT,
    price INTEGER
);

COMMIT;