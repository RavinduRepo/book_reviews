const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', postRoutes);

module.exports = app;
