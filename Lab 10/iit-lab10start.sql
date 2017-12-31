-- create the tables for our movies

CREATE TABLE `movies` (
 `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(100) NOT NULL,
 `year` char(4) DEFAULT NULL,
 PRIMARY KEY (`movieid`)
);


-- insert data into the tables

INSERT INTO movies VALUES
  (1, "Elizabeth", "1998"),
  (2, "Elling", "2001"),
  (3, "Oh Brother Where Art Thou?", "2000"),
  (4, "The Lord of the Rings: The Fellowship of the Ring", "2001"),
  (5, "Up in the Air", "2009");
 
 
 
-- creates the table for actors

CREATE TABLE `actors` (
 `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `firstName` varchar(100) NOT NULL,
 `lastName` varchar(100) NOT NULL,
 `dateOfBirth` varchar(10) DEFAULT NULL, -- yyyy-mm-dd
 PRIMARY KEY (`actorid`)
);


-- insert data into the actor tables

INSERT INTO actors VALUES
  (1, "Geoffrey", "Rush", '1951-07-06'),
  (2, "Sven", "Nordin", '1957-02-06'),
  (3, "Turturro", "John", '1957-02-28'),
  (4, "Orlando", "Bloom", '1977-01-13'),
  (5, "Jason", "Bateman", '1969-01-14');
  
SELECT * FROM `actors` WHERE `dateOfBirth` >= 1965 -- selects all actors born in or after 1965



-- create a table relating movies and actors
CREATE TABLE `relationship` (
 `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `actorid` int(10) unsigned NOT NULL,
 PRIMARY KEY (`movieid`)
);

-- insert data into the relationship tables

INSERT INTO relationship VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5);

SELECT movies.title, movies.year, actors.firstName, actors.lastName,actors.dateOfBirth FROM movies, actors, relationship WHERE relationship.movieid = movies.movieid AND relationship.actorid = actors.actorid -- selects a movie title and movie year corresponding to an actor in the movie, featuring his or her name and date or birth



