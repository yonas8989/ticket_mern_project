const express = require('express');
const { Ticket } = require('../models/ticket'); // Ticket model
const auth = require('../middleware/auth'); // Authentication middleware
const router = express.Router();

// Create a new support ticket (Only users can create tickets)
router.post('/', auth, async (req, res) => {
  // Ensure the role is user
  console.log(req.user.password);
  if (req.user.isAdmin) return res.status(403).send("Access denied. Only users can create tickets.");

  const ticket = new Ticket({
    title: req.body.title,
    description: req.body.description,
    status: 'Open',
    userId: req.user._id // Link ticket to the user who created it
  });

  await ticket.save();
  res.status(201).send(ticket);
});

// Get all tickets (Admin) or user-specific tickets (User)
router.get('/', auth, async (req, res) => {
  if (req.user.isAdmin) {
    // Admin sees all tickets
    const tickets = await Ticket.find();
    res.send(tickets);
  } else {
    // User sees only their own tickets
    const tickets = await Ticket.find({ userId: req.user._id });
    res.send(tickets);
  }
});

// Update ticket status (Admin only)
router.put('/:id', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send("Access denied. Only admins can update tickets.");

  // Find the ticket by ID
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return res.status(404).send("Ticket not found.");

  // Update the ticket status
  ticket.status = req.body.status || ticket.status;

  await ticket.save();
  res.send(ticket);
});

module.exports = router;
