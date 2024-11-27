-- Create the database
CREATE DATABASE cookcraft;

-- Use the created database
USE cookcraft;

-- Create the user_table
CREATE TABLE user_table (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Accountcreated_on DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create the recipe_table
CREATE TABLE recipe_table (
    recipeID INT AUTO_INCREMENT PRIMARY KEY,
    recipeName VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    Duration INT NOT NULL, -- Duration in minutes
    categoryName VARCHAR(100),
    Recipecreated_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID) REFERENCES user_table(userID) ON DELETE CASCADE
);

-- Create the comments_table
CREATE TABLE comments_table (
    commentID INT AUTO_INCREMENT PRIMARY KEY,
    recipeID INT NOT NULL,
    userID INT NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES recipe_table(recipeID) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES user_table(userID) ON DELETE CASCADE
);

-- Create the ingredients_table
CREATE TABLE ingredients_table (
    ingredientID INT AUTO_INCREMENT PRIMARY KEY,
    ingredientName VARCHAR(255) NOT NULL,
    recipeID INT NOT NULL,
    FOREIGN KEY (recipeID) REFERENCES recipe_table(recipeID) ON DELETE CASCADE
);
