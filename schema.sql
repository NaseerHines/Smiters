/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

/**
Need to finsih making schema
*/

DROP DATABASE IF EXISTS smiters;
CREATE DATABASE smiters;

USE smiters;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (id)
);