CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT(140) NOT NULL,
  `room` TEXT(140) NOT NULL,
  `user` TEXT(140) NOT NULL,
  PRIMARY KEY (`ID`)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE `Users` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `username` TEXT(14) NOT NULL,
  PRIMARY KEY (`ID`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

