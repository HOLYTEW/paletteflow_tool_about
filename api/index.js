const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// HTML Routes
app.get('/', (req, res) => {
    res.redirect('https://paletteflow-home.vercel.app/');
});

app.get('/tool', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/tool.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;