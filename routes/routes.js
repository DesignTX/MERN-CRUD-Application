const express = require('express');
const router = express.Router();

// GET REQUEST, CREATE, ADD, DELETE, UPDATE.

router.get('/', (req, res) => res.send('Customer Route'));

module.exports = router;