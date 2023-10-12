CREATE DATABASE IF NOT EXISTS data_base;


USE data_base;

CREATE TABLE advertisement (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    shortDescription VARCHAR(255),
    detailDescription VARCHAR(255)
);

CREATE TABLE companies (
    id_companies INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    sector VARCHAR(255)
);

CREATE TABLE peoples (
    id_people INT PRIMARY KEY AUTO_INCREMENT,
    lastName VARCHAR(255),
    firstName VARCHAR(255),
    statu VARCHAR(255),
    tel VARCHAR(255),
    email VARCHAR(255),
    mdp VARCHAR(255)
);

CREATE TABLE information (
    id_information INT PRIMARY KEY AUTO_INCREMENT,
    emailSent VARCHAR(255)    
);


