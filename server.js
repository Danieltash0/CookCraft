const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Daniel2711!',
  database: 'cookcraft',
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Route to handle sign-up
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Validate if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  // Insert user into the database
  const query = `INSERT INTO user_table (UserName, Email, Password) VALUES (?, ?, ?)`;
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
});

// Route to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validate if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  // Query to find the user by email
  const query = 'SELECT * FROM user_table WHERE Email = ?';
  db.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (result.length === 0 || result[0].Password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Password matches, return success
    res.status(200).json({ message: 'Login successful', userId: result[0].UserID });
  });
});

// Query to get user details for the user page
app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT UserName, AccountCreatedOn FROM user_table WHERE UserID = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(result[0]);
  });
});

// Query to fetch user recipes
app.get('/recipes/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT recipeName, description FROM recipe_table WHERE UserID = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
