const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

// GET REQUEST, CREATE, ADD, DELETE, UPDATE.

router.post('/', [
  check('name', 'Name Required')
    .not()
    .isEmpty(),
  check('email', 'Valid Email Required')
    .isEmail()
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('Customer Route');
  })

module.exports = router;