BEGIN;

INSERT INTO products VALUES
  (1, 'Self-Portrait', '/images/self-portrait.jpg', 1, 'Rembrandt van Rijn', 'Rembrandt''s largest and most famous painting was made for one of the three headquarters of Amsterdam''s civic guard. These groups of civilian soldiers defended the city from attack. Rembrandt was the first to paint all of the figures in a civic guard piece in action. The captain, dressed in black, gives the order to march out. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain''s gesturing hand and the young girl in the foreground. She was the company mascot. The nickname Night Watch originated much later, when the painting was thought to represent a nocturnal scene.'
, 1200000, '1628'),
(2, 'Bold and Brash', '/images/flower-pyamid.jpg', 1, 'S. Quidward', 'Self portrait from emerging artist.'
, 300000, 'Unknown'),
(3, 'Floral Still Life', '/images/tulips.jpg', 1, 'Han Bollongier', 'A frozen river dotted by people at play or at work is the subject of this winter landscape painted by Hendrick Avercamp. Inspect it down to the smallest detail: a man slipping, a bare bottom, and skating couples.'
, 1000000, '1608'),
(4, 'The Threatened Swan', '/images/swan.png', 1, 'Jan Asselijn', 'The swan furiously flies up to chase away a dog swimming towards her. About a hundred years after its creation, someone added an inscription to the painting and, in so doing, turned it into a political statement.'
, 600000, '1650')
ON CONFLICT DO NOTHING;

COMMIT;