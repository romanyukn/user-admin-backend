const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const app = express();

mongoose.connect("mongodb://localhost/user-admin-backend");
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoos'));

app.use(express.json());
app.use('/api', router);

app.listen(3001);
