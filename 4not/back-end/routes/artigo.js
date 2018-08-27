const express = require('express');
const router = express.Router();
const controller = require('../controller/artigo');

router.get('/', controller().get);
router.put('/', controller().post);

module.exports = router;