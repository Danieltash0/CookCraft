--LAYOUT OF THE DATABASE

CREATE DATABASE cookcraft;

USE cookcraft;

CREATE TABLE user_table (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Accountcreated_on DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipe_table (
    recipeID INT AUTO_INCREMENT PRIMARY KEY,
    recipeName VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    Duration INT NOT NULL, -- Duration in minutes
    categoryName VARCHAR(100),
    recipeSteps TEXT NOT NULL, -- Steps to prepare the recipe
    recipePic BLOB, -- Stores the image for the recipe
    Recipecreated_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES user_table(userID) ON DELETE CASCADE
);

CREATE TABLE comments_table (
    commentID INT AUTO_INCREMENT PRIMARY KEY,
    recipeID INT NOT NULL,
    userID INT NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES recipe_table(recipeID) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES user_table(userID) ON DELETE CASCADE
);

CREATE TABLE ingredients_table (
    ingredientID INT AUTO_INCREMENT PRIMARY KEY,
    ingredientName VARCHAR(255) NOT NULL,
    recipeID INT NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES recipe_table(recipeID) ON DELETE CASCADE
);
