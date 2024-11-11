const express = require('express');
const router = express.Router();

const home = require('../views/home');
const login = require('../views/login');
const signup = require('../views/signup');

router.get('/', (req, res) => res.send(home));
router.get('/login', (req, res) => res.send(login));
router.get('/signup', (req, res) => res.send(signup));

module.exports = router;
