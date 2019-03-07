CREATE DATABASE burger;
USE burger;
CREATE TABLE burgers(
id INT AUTO_INCREMENT primary key,
burger_name VARCHAR(30) NOT NULL,
devoured boolean DEFAULT false
);