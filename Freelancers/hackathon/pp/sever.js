const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for bugs
const bugs = [];

// Routes
app.get('/bugs', (req, res) => {
    res.json(bugs);
});

app.post('/bugs', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required.' });
    }

    bugs.push({ title, description });
    res.status(201).json({ message: 'Bug reported successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});