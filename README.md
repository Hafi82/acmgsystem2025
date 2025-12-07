# Excellence Graphics - Account Management System

A full-stack customer account management system with a premium UI and complete backend.

## Features

✨ **Customer Management**
- Add new customers with name and address
- View customer details in a beautiful card layout
- Edit existing customer information
- Delete customers with confirmation

🎯 **Payment Tracking**
- Track payment status (None, Partial, Full)
- Filter customers by payment status
- Visual payment badges

💎 **Premium UI**
- Modern glassmorphic design
- Smooth animations and transitions
- Responsive layout
- Dark theme with vibrant gradients

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `sqlite3` - Database
- `cors` - Cross-origin resource sharing

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Open the Application

Open `index.html` in your web browser, or navigate to:
```
http://localhost:3000/index.html
```

## API Endpoints

### Get All Customers
```
GET /api/customers
GET /api/customers?payment_status=Partial
GET /api/customers?payment_status=Full
```

### Get Single Customer
```
GET /api/customers/:id
```

### Create Customer
```
POST /api/customers
Content-Type: application/json

{
  "name": "Customer Name",
  "address": "Customer Address",
  "payment_status": "None"
}
```

### Update Customer
```
PUT /api/customers/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "address": "Updated Address",
  "payment_status": "Partial"
}
```

### Delete Customer
```
DELETE /api/customers/:id
```

## Database

The SQLite database (`excellence_graphics.db`) will be created automatically when you start the server for the first time.

### Schema

```sql
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    payment_status TEXT DEFAULT 'None' CHECK(payment_status IN ('None', 'Partial', 'Full')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Usage

1. **Add Customer**: Click the "Add Customer" button to open the form
2. **View Details**: Click on any customer card to view full details
3. **Edit Customer**: Click the "Edit" button on a customer card or in the detail view
4. **Delete Customer**: Click the "Delete" button (confirmation required)
5. **Filter**: Use the filter buttons to show only customers with specific payment status

## Project Structure

```
Accounts- Excellence Graphics/
├── index.html          # Main HTML file
├── styles.css          # Styling and design system
├── app.js              # Frontend JavaScript
├── server.js           # Express server
├── database.js         # Database operations
├── package.json        # Dependencies
├── excellence_graphics.db  # SQLite database (auto-generated)
└── README.md          # This file
```

## Notes

- The application uses a local SQLite database, so all data is stored on your computer
- Make sure the server is running before opening the application
- The server must be running on port 3000 for the frontend to connect properly
