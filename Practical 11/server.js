const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

const homeRoute = require('./routes/home');
app.use('/home', homeRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Express App! Go to /home');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
