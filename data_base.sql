CREATE DATABASE IF NOT EXISTS data_base;


USE data_base;

CREATE TABLE advertisement (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    shortDescription VARCHAR(255),
    detailDescription VARCHAR(255)
);

CREATE TABLE companies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    sector VARCHAR(255)
);

CREATE TABLE people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(255),
    lastName VARCHAR(255),
    firstName VARCHAR(255),
    tel VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE information (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emailSent VARCHAR(255),
    ad VARCHAR(255),
    people VARCHAR(255),
    companies VARCHAR(255)
);
