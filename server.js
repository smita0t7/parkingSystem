const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');

console.log('Attempting to import ParkingSlotsRoute');  // Add this line for debugging
const ParkingSlotsRoute = require('./Routes/ParkingSlotsRoute');
console.log('Successfully imported ParkingSlotsRoute');  // Add this line to confirm import

// Express app created
const app = express();
const PORT = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Test route to check if server is working
app.get("/api", (req, res) => {
    res.send('Hello guys!!!');
});

// Integrate parking slot routes
app.use('/api/parking-slots', ParkingSlotsRoute);

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});
