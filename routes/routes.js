const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

const Customer = require('../models/Customer');


router.get("/", async (req, res) => {
  const customers = await Customer.find({})
  res.status(200).send(customers);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findOne({ _id: id })
    res.status(200).send(customer);
  } catch (err) {
    res.status(400).send(`Customer with ID ${id} not found.`);
  }
});

router.post('/', [
  check('name', 'Name Required')
    .not()
    .isEmpty(),
  check('email', 'Valid Email Required')
    .isEmail()
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, dob, email, phone } = req.body;

    try {
      let customer = await Customer.findOne({ email });

      if (customer) {
        return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
      }

      customer = new Customer({
        name,
        dob,
        email,
        phone
      });

      await customer.save();

      console.log(req.body);
      res.status(201).send('Customer Added');

    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);


router.put("/:id", [
  check('name', 'Name Required')
    .not()
    .isEmpty(),
  check('email', 'Valid Email Required')
    .isEmail()
],
  async (req, res) => {
    const { id } = req.params;
    const foundCustomer = await Customer.findOne({ _id: id })
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedCustomerDetails = {
      name: req.body.name,
      dob: req.body.dob,
      email: req.body.email,
      phone: req.body.phone
    };
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate
        // { new: true} sends back updated customer
        (req.params.id, updatedCustomerDetails, { new: true });
      res.status(200).send(updatedCustomer)
    } catch (err) {
      return res.status(400).send(`Customer updating error ${err}`)
    }
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id)
    return res.status(200).send(`Customer deleted ${deletedCustomer.name}`)
  } catch (err) {
    return res.status(400).send(`Error deleting customer ${err}`)
  }
});



module.exports = router;