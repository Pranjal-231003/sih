// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt'); // For hashing passwords
const userController = require("../controllers/userConroller");
// Route to handle signup
router.post('/signup', userController.insertUser);

module.exports = router;
