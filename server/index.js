const path = require('path');
const express = require('express');
const config = require('../shared/config');

const app = express();

app.use(express.static('client'));

app.listen(config.port);