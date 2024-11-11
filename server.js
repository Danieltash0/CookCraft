// server.js
const express = require('express');
const path = require('path');
const pagesRouter = require('./routes/pages');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
