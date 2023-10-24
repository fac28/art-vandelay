BEGIN;

INSERT INTO products VALUES
  (1, 'public/images/the-night-watch.png', 1, 'Rembrandt van Rijn', 'Rembrandt''s largest and most famous painting was made for one of the three headquarters of Amsterdam''s civic guard. These groups of civilian soldiers defended the city from attack. Rembrandt was the first to paint all of the figures in a civic guard piece in action. The captain, dressed in black, gives the order to march out. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain''s gesturing hand and the young girl in the foreground. She was the company mascot. The nickname Night Watch originated much later, when the painting was thought to represent a nocturnal scene.'
, 15)
ON CONFLICT DO NOTHING;

COMMIT;