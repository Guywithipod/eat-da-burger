DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE Burgers
(
    id int not null AUTO_INCREMENT,
    name VARCHAR(30) not null,
    devoured boolean DEFAULT false,
    createdAt date,
     updatedAt date,
    PRIMARY KEY(id)
)


INSERT INTO Burgers (name, devoured, createdAt, updatedAt) VALUES ("Bacon Double Cheeseburger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Burgers (name, devoured, createdAt, updatedAt) VALUES ("Vegan Burger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Burgers (name, devoured, createdAt, updatedAt) VALUES ("Bourbon Chicken Burger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Burgers (name, devoured, createdAt, updatedAt) VALUES ("Mushroom Swiss", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO Burgers (name, devoured, createdAt, updatedAt) VALUES ("The Works", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);