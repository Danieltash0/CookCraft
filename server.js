const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

const app = express();
const port = 5000;
const SECRET_KEY = 'your_secret_key'; 

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

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

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    //const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO user_table (UserName, Email, Password) VALUES (?, ?, ?)`;
    db.query(query, [username, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Database error', error: err });
      }
      const token = jwt.sign({ userId: result.insertId }, SECRET_KEY, { expiresIn: '1h' });
      res.status(201).json({ success: true, message: 'User created successfully', token });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const query = 'SELECT * FROM user_table WHERE Email = ?';
  db.query(query, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (result.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.Password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.UserID }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ success: true, message: 'Login successful', token });
  });
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user; 
    next();
  });
};

app.get('/user', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const query = 'SELECT UserName, AccountCreatedOn FROM user_table WHERE UserID = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user: result[0] });
  });
});

app.get('/recipes', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const query = 'SELECT recipeName, description FROM recipe_table WHERE UserID = ?';
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json({ recipes: result });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

