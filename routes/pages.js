const express = require('express');
const router = express.Router();

const home = require('../views/home');
const login = require('../views/login');
const signup = require('../views/signup');
const createRecipe = require('../views/createRecipe');
const myrecipes = require('../views')

//Setting up routes for each page
router.get('/', (req, res) => res.send(home));
router.get('/createRecipe', (req, res) => res.send(createRecipe));
router.get('myrecipes', (req, res) => res.send(myrecipes));
router.get('/login', (req, res) => res.send(login));
router.get('/signup', (req, res) => res.send(signup));

module.exports = router;
