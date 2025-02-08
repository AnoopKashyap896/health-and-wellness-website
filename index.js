const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 3000;

// Initialize SQLite database
const db = new sqlite3.Database('./bookings.db'); // Will create bookings.db if it doesn't exist

// Create bookings table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL,
    activity TEXT NOT NULL,
    comment TEXT
  )
`);

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public_html')));

// Endpoint to handle form submission
app.post('/submitBooking', (req, res) => {
    const { fname, lname, email, age, comment, activity } = req.body;

    const query = `
        INSERT INTO bookings (fname, lname, email, age, comment, activity)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [fname, lname, email, age, comment, activity], function(err) {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error submitting booking." });
        } else {
            res.status(200).json({ message: "Booking submitted successfully" });
        }
    });
});
app.get('/viewBookings', (req, res) => {
    const query = "SELECT * FROM bookings";

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error fetching bookings." });
        } else {
            console.log("Fetched bookings:", rows); // Log the rows to verify
            res.status(200).json({ bookings: rows });
        }
    });
});

// Initialize SQLite database
const usersdb = new sqlite3.Database('./users.db'); 

// Create userdetails table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS userdetails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    dob TEXT NOT NULL
  )
`);

// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public_html')));
const bcrypt = require("bcryptjs"); // Import bcrypt

app.post("/signup", async (req, res) => {
    const { username, password, dob } = req.body;

    // Hash the password before storing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = `INSERT INTO userdetails (username, password, dob) VALUES (?, ?, ?)`;
    db.run(query, [username, hashedPassword, dob], function (err) {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error signing up." });
        } else {
            res.status(200).json({ message: "Signup successful!" });
        }
    });
});
// Fetch Users API - Retrieve all users
app.get('/viewUsers', (req, res) => {
    const query = "SELECT * FROM userdetails";

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Error fetching users." });
        } else {
            res.status(200).json({ users: rows });
        }
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM userdetails WHERE username = ?`;
    db.get(query, [username], async (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error logging in." });
        }
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        // Compare entered password with hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            res.status(200).json({ message: "Login successful!" });
        } else {
            res.status(401).json({ message: "Invalid username or password." });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});