const express = require('express');
const router = express.Router();
const controller = require('../controller/artigo');

router.get('/', controller);

module.exports = router;