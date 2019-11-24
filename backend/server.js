const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();


app.use(cors());
// GET data from req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send(`API Working`));

// Routes
app.use('/routes', require('./routes/routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));