BEGIN;

INSERT INTO products VALUES
  (1, '../public/images/the-night-watch.png', 1, 'Rembrandt van Rijn', 'Test.', 15)
ON CONFLICT DO NOTHING;

COMMIT;