const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database connection
const dbPath = path.join(__dirname, 'excellence_graphics.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize database schema
function initializeDatabase() {
    db.run(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            payment_status TEXT DEFAULT 'None' CHECK(payment_status IN ('None', 'Partial', 'Full')),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Customers table ready');
        }
    });
}

// Database operations
const dbOperations = {
    // Get all customers with optional filter
    getAllCustomers: (paymentFilter, callback) => {
        let query = 'SELECT * FROM customers ORDER BY created_at DESC';
        let params = [];

        if (paymentFilter && paymentFilter !== 'All') {
            query = 'SELECT * FROM customers WHERE payment_status = ? ORDER BY created_at DESC';
            params = [paymentFilter];
        }

        db.all(query, params, callback);
    },

    // Get customer by ID
    getCustomerById: (id, callback) => {
        db.get('SELECT * FROM customers WHERE id = ?', [id], callback);
    },

    // Create new customer
    createCustomer: (customer, callback) => {
        const { name, address, payment_status } = customer;
        db.run(
            'INSERT INTO customers (name, address, payment_status) VALUES (?, ?, ?)',
            [name, address, payment_status || 'None'],
            function (err) {
                callback(err, this ? this.lastID : null);
            }
        );
    },

    // Update customer
    updateCustomer: (id, customer, callback) => {
        const { name, address, payment_status } = customer;
        db.run(
            'UPDATE customers SET name = ?, address = ?, payment_status = ? WHERE id = ?',
            [name, address, payment_status, id],
            callback
        );
    },

    // Delete customer
    deleteCustomer: (id, callback) => {
        db.run('DELETE FROM customers WHERE id = ?', [id], callback);
    }
};

module.exports = dbOperations;
