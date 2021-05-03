/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */
 
 /*UPLOAD THIS SCHEMA AFTER SETTING UP MYSQL DON'T FORGET THIS*/

DROP DATABASE IF EXISTS smiters;
CREATE DATABASE smiters;

USE smiters;

CREATE TABLE `USERS` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(100) NOT NULL UNIQUE,
  `platform`varchar(4) NOT NULL UNIQUE,
  `kd` int NOT NULL,
  `wl` int NOT NULL,
  `playtime` int NOT NULL
);
