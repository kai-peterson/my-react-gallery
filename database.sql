--> IMPORTANT!!! <-- 
-- database name is 'my_gallery' not 'react_gallery' --

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(300) not null,
	description varchar(250) not null,
	likes int
);

INSERT INTO gallery (path, description, likes)
VALUES ('images/goat_small.jpg', 'A small goat', 0),
('images/goat_small.jpg', 'A smol goat', 0),
('https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg', 'Look at the tongue on this goat!!! Also, this is a really long description just to show what a long description looks like on the page', 0),
('images/goat_small.jpg', 'A big goat', 0),
('images/goat_small.jpg', 'A shifty goat', 0),
('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Felizabethrushe%2Ffiles%2F2018%2F10%2FGoat-wearing-Nofence-collar-1200x800.jpg', 'This goat has a bell around its neck. It is kinda cute', 0),
('https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg', 'This goat wild...', 0),
('https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'Look at this goat with a rope around its neck. I hope that is not for a bad reason :(', 0);

UPDATE gallery SET likes=1 WHERE id=1;

DELETE FROM gallery WHERE id=1