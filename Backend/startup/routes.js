const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const tickets = require('../routes/tickets')
const error = require('../middleware/error');


module.exports = function(app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/tickets', tickets);
  app.use(error);
}