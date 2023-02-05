const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ECL = require('hpcc-js-ecl');

const app = express();
app.use(bodyParser.json());

// Connect to ECL HPCC database
const client = new ECL({
  url: 'YOUR_ECL_HPCC_URL',
  username: 'YOUR_ECL_HPCC_USERNAME',
  password: 'YOUR_ECL_HPCC_PASSWORD'
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/travel_itinerary', { useNewUrlParser: true });

// Define flight model
const Flight = mongoose.model('Flight', {
  flightNumber: String,
  departureDate: Date,
  departureTime: String,
  arrivalDate: Date,
  arrivalTime: String,
  origin: String,
  destination: String,
  airline: String
});

// Define hotel model
const Hotel = mongoose.model('Hotel', {
  hotelName: String,
  checkInDate: Date,
  checkOutDate: Date,
  location: String,
  roomType: String,
  rate: Number
});

// Define transportation model
const Transportation = mongoose.model('Transportation', {
  transportationType: String,
  pickupDate: Date,
  pickupTime: String,
  pickupLocation: String,
  dropoffDate: Date,
  dropoffTime: String,
  dropoffLocation: String
});

// Route to add a flight
app.post('/flight', (req, res) => {
  const flight = new Flight({
    flightNumber: req.body.flightNumber,
    departureDate: req.body.departureDate,
    departureTime: req.body.departureTime,
    arrivalDate: req.body.arrivalDate,
    arrivalTime: req.body.arrivalTime,
    origin: req.body.origin,
    destination: req.body.destination,
    airline: req.body.airline
  });

  flight.save()
    .then(() => res.send({ message: 'Flight added successfully' }))
    .catch(error => res.status(400).send({ error: error.message }));
});

// Route to add a hotel
app.post('/hotel', (req, res) => {
  const hotel = new Hotel({
    hotelName: req.body.hotelName,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    location: req.body.location,
    roomType: req.body.roomType,
    rate: req.body.rate
  });

  hotel.save()
    .then(() => res.send({ message: 'Hotel added successfully' }))
    .catch(error => res.status(400).send({ error: error.message }));
});

// Route to add a transportation
app
.post('/transportation', (req, res) => {
const transportation = new Transportation({
transportationType: req.body.transportationType,
pickupDate: req.body.pickupDate,
pickupTime: req.body.pickupTime,
pickupLocation: req.body.pickupLocation,
dropoffDate: req.body.dropoffDate,
dropoffTime: req.body.dropoffTime,
dropoffLocation: req.body.dropoffLocation
});

transportation.save()
.then(() => res.send({ message: 'Transportation added successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to retrieve itinerary
app.get('/itinerary', (req, res) => {
Promise.all([
Flight.find({}),
Hotel.find({}),
Transportation.find({})
])
.then(([flights, hotels, transports]) => {
res.send({ flights, hotels, transports });
})
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to update flight information
app.put('/flight/:id', (req, res) => {
Flight.findByIdAndUpdate(req.params.id, {
flightNumber: req.body.flightNumber,
departureDate: req.body.departureDate,
departureTime: req.body.departureTime,
arrivalDate: req.body.arrivalDate,
arrivalTime: req.body.arrivalTime,
origin: req.body.origin,
destination: req.body.destination,
airline: req.body.airline
})
.then(() => res.send({ message: 'Flight updated successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to update hotel information
app.put('/hotel/:id', (req, res) => {
Hotel.findByIdAndUpdate(req.params.id, {
hotelName: req.body.hotelName,
checkInDate: req.body.checkInDate,
checkOutDate: req.body.checkOutDate,
location: req.body.location,
roomType: req.body.roomType,
rate: req.body.rate
})
.then(() => res.send({ message: 'Hotel updated successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to update transportation information
app.put('/transportation/:id', (req, res) => {
Transportation.findByIdAndUpdate(req.params.id, {
transportationType: req.body.transportationType,
pickupDate: req.body.pickupDate,
pickupTime: req.body.pickupTime,
pickupLocation: req.body.pickupLocation,
dropoffDate: req.body.dropoffDate,
dropoffTime: req.body.dropoffTime,
dropoffLocation: req.body.dropoffLocation
})
.then(() => res.send({ message: 'Transportation updated successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to delete flight information
app.delete('/flight/:id', (req, res) => {
Flight.findByIdAndDelete(req.params.id)
.then(() => res.send({ message: 'Flight deleted successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to delete hotel information
app.delete('/hotel/:id', (req, res) => {
Hotel.findByIdAndDelete(req.params.id)
.then(() => res.send({ message: 'Hotel deleted successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

// Route to delete transportation information
app.delete('/transportation/:id', (req, res) => {
Transportation.findByIdAndDelete(req.params.id)
.then(() => res.send({ message: 'Transportation deleted successfully' }))
.catch(error => res.status(400).send({ error: error.message }));
});

app.listen(port, () => console.log(Travel itinerary app is listening on port ${port}));

//Node.js and npm (Node Package Manager) installed on your computer.
 // Run the following command
 npm install express
npm install body-parser
npm install nodemailer
npm install mongoose
npm install hpcc-js-ecl
// now connect to ecl hpcc database


