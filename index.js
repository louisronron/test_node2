/**
 * Title: Orange Digital React Challenge server
 * Description: Entry point for the Orange Digital React challenge server API.
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */

const express = require('express');
const fs = require('fs');
const app = express();

// GET /api/gallery
// Returns all page data for the gallery page.
app.get('/api/gallery', (req, res) => {
    const data = fs.readFileSync('./data/gallery.json');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
});

// GET /api/detail
// Returns all page data for the detail page.
app.get('/api/detail', (req, res) => {
    const data = fs.readFileSync('./data/detail.json');
    const jsonData = JSON.parse(data);
    res.send(jsonData);
});


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
