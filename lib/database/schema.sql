BEGIN;

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    image TEXT,
    quantity INTEGER,
    artist TEXT,
    description TEXT,
    price INTEGER
)

COMMIT;