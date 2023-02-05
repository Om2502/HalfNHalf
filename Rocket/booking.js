const express = require('express');
const bodyParser = require('body-parser');
const ECL = require('ecl-sdk');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Connect to ECL database
const ecl = new ECL({
  apiKey: 'YOUR_ECL_API_KEY'
});

// User model
const User = ecl.model('User', {
  email: String,
  password: String
});

// Booking model
const Booking = ecl.model('Booking', {
  name: String,
  email: String,
  destination: String,
  departureDate: Date,
  returnDate: Date,
  payment: String
});

// Passport authentication strategy
passport.use(new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) => {
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return done(null, false);
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
    .catch(err => {
      console.error(err);
    });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Route to sign up a new user
app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const user = new User({
        email: email,
        password: hash
      });
      user
        .save()
        .then(user => {
          res.send(user);
        })
        .catch(err => {
          res.status(400).send(err);
        });
    });
  });
});

// Route to log in an existing user
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

// Route to check if user is authenticated
app.get('/check-auth',
(req, res) => {
if (req.user) {
res.send({ authenticated: true });
} else {
res.send({ authenticated: false });
}
});

// Route to book a travel arrangement
app.post('/book', (req, res) => {
const booking = new Booking({
name: req.body.name,
email: req.body.email,
destination: req.body.destination,
departureDate: req.body.departureDate,
returnDate: req.body.returnDate,
payment: req.body.payment
});
booking
.save()
.then(booking => {
res.send(booking);
})
.catch(err => {
res.status(400).send(err);
});
});

// Route to process payment
app.post('/process-payment', (req, res) => {
// Payment processing code here
// ...

// Send confirmation email
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'YOUR_EMAIL_ADDRESS',
pass: 'YOUR_EMAIL_PASSWORD'
}
});
const mailOptions = {
from: 'YOUR_EMAIL_ADDRESS',
to: req.body.email,
subject: 'Travel Arrangement Booking Confirmation',
text: Dear ${req.body.name},\n\nYour travel arrangement to ${req.body.destination}
has been booked successfully.\n\nThank you for choosing our service.\n\nBest regards,\nTravel Website Team
};
transporter.sendMail(mailOptions, (err, info) => {
if (err) {
console.error(err);
res.status(400).send(err);
} else {
res.send({ message: 'Payment processed and confirmation email sent successfully.' });
}
});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(Server running on port ${port});
});