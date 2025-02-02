const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models');

router.post('/register', async (req, res) => {
  // Implementar registro de usuário
});

router.post('/login', async (req, res) => {
  // Implementar login
});

module.exports = router;