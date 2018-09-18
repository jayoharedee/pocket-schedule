const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./api/users');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Pasport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

app.listen(port, () => console.log(`Server running on port ${port}`));
