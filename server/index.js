const path = require('path');
const express = require('express');
const config = require('../shared/config');

const app = express();

app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(config.port, () => console.log(`Listening on ${config.port}`));