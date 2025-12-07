const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// API Routes

// Get all customers (with optional payment status filter)
app.get('/api/customers', (req, res) => {
    const { payment_status } = req.query;

    db.getAllCustomers(payment_status, (err, customers) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(customers);
    });
});

// Get single customer by ID
app.get('/api/customers/:id', (req, res) => {
    const { id } = req.params;

    db.getCustomerById(id, (err, customer) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customer);
    });
});

// Create new customer
app.post('/api/customers', (req, res) => {
    const { name, address, payment_status } = req.body;

    // Validation
    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required' });
    }

    const customer = { name, address, payment_status: payment_status || 'None' };

    db.createCustomer(customer, (err, customerId) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            message: 'Customer created successfully',
            customerId
        });
    });
});

// Update customer
app.put('/api/customers/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, payment_status } = req.body;

    // Validation
    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required' });
    }

    const customer = { name, address, payment_status };

    db.updateCustomer(id, customer, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Customer updated successfully' });
    });
});

// Delete customer
app.delete('/api/customers/:id', (req, res) => {
    const { id } = req.params;

    db.deleteCustomer(id, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Customer deleted successfully' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✓ Excellence Graphics Account System running on http://localhost:${PORT}`);
    console.log(`✓ API available at http://localhost:${PORT}/api/customers`);
});
