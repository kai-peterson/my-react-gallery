--> IMPORTANT!!! <-- 
-- database name is 'my_gallery' not 'react_gallery' --

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(150) not null,
	description varchar(250) not null,
	likes int
);

INSERT INTO gallery (path, description, likes)
VALUES ('images/goat_small.jpg', 'A small goat', 0),
('images/goat_small.jpg', 'A smol goat', 0),
('images/goat_small.jpg', 'A goat', 0),
('images/goat_small.jpg', 'A big goat', 0),
('images/goat_small.jpg', 'A shifty goat', 0);

UPDATE gallery SET likes=1 WHERE id=1;
