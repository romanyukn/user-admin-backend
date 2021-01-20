const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/user-admin-backend");
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoos'));

app.use('/', indexRouter);

app.listen(3001);
