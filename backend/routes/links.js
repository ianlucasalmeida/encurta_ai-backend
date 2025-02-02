const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { Link } = require('../models');

router.post('/shorten', auth, async (req, res) => {
  // Implementar criação de link curto
});

router.get('/:code', async (req, res) => {
  // Implementar redirecionamento
});

module.exports = router;