DROP DATABASE IF EXISTS pan_db;
CREATE DATABASE pan_db;

USE pan_db;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES ('Panadería'),('Facturería');

CREATE TABLE images (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    
);
INSERT INTO images (name) VALUES ('/public/img/pan.png');

CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (image_id) REFERENCES images(id)
);
INSERT INTO products (name, category_id, price, description, image_id) VALUES ('Pan 1', 1, 100, 'Descripción 1',1),('Pan 2', 1, 200, 'Descripción 2',1),('Pan 3', 1, 200, 'Descripción 3',1),('Pan 4', 1, 200, 'Descripción 4',1),('Pan 5', 2, 200, 'Descripción 5',1);