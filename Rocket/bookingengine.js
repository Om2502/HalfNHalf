import React, { useState } from 'react';

function BookingEngine() {
  const [tripType, setTripType] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Trip Type: ${tripType}`);
    console.log(`Destination: ${destination}`);
    console.log(`Departure Date: ${departureDate}`);
    console.log(`Return Date: ${returnDate}`);
    console.log(`Number of Travelers: ${numberOfTravelers}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Trip</h2>
      <label>
        Trip Type:
        <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
          <option value="">Select Trip Type</option>
          <option value="one-way">One-way</option>
          <option value="round-trip">Round-trip</option>
        </select>
      </label>
      <br />
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </label>
      <br />
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Return Date:
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Number of Travelers:
        <input
          type="number"
          value={numberOfTravelers}
          onChange={(e) => setNumberOfTravelers(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingEngine;
//extend this code to add functionality to save the information to a database or display it on the page.
