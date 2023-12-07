DROP DATABASE IF EXISTS lafer_db;
CREATE DATABASE lafer_db;

USE lafer_db;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);
INSERT INTO categories (name) VALUES ('Panadería'),('Facturería');

CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
INSERT INTO products (name, category_id, price, description, image) VALUES ('Pan 1', 1, 100, 'Descripción 1','pan.png'),('Pan 2', 1, 200, 'Descripción 2','pan.png'),('Pan 3', 1, 200, 'Descripción 3','pan.png'),('Pan 4', 1, 200, 'Descripción 4','pan.png'),('Pan 5', 2, 200, 'Descripción 5','pan.png');