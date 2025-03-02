const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed'],
    default: 'Open'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ticket model
const Ticket = mongoose.model("Ticket", ticketSchema);

// Ticket validation function
function validateTicket(ticket) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    description: Joi.string().min(10).max(1000).required(),
    status: Joi.string().valid('Open', 'In Progress', 'Closed'),
    userId: Joi.string().required()
  });

  return schema.validate(ticket);
}

exports.Ticket = Ticket;
exports.validate = validateTicket;
