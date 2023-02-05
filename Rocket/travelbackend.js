const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();

// Connect to ECL HPCC database
const ECL = require('hpcc-js-ecl');
const client = new ECL({
  url: 'YOUR_ECL_HPCC_URL',
  username: 'YOUR_ECL_HPCC_USERNAME',
  password: 'YOUR_ECL_HPCC_PASSWORD'
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/travel_expense_tracker', { useNewUrlParser: true });

// Define expense model
const Expense = mongoose.model('Expense', {
  category: String,
  amount: Number,
  date: Date,
  description: String
});

app.use(bodyParser.json());

// Route to retrieve expenses
app.get('/expenses', (req, res) => {
  Expense
    .find()
    .then(expenses => {
      res.send(expenses);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// Route to add an expense
app.post('/expense', (req, res) => {
  const expense = new Expense({
    category: req.body.category,
    amount: req.body.amount,
    date: req.body.date,
    description: req.body.description
  });
  expense
    .save()
    .then(expense => {
      res.send(expense);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Node.js and npm (Node Package Manager) installed on your computer.
 // Run the following command
 npm install express
npm install body-parser
npm install nodemailer
npm install mongoose
npm install hpcc-js-ecl
// now connect to ecl hpcc database