# 🚀 Quick Start Guide - Excellence Graphics Account Management System

## ⚠️ Prerequisites Required

Your system needs **Node.js** installed to run this application. Node.js is not currently installed on your computer.

### Step 1: Install Node.js

1. **Download Node.js**:
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose the Windows installer (.msi file)

2. **Install Node.js**:
   - Run the downloaded installer
   - Follow the installation wizard
   - **Important**: Make sure to check the box that says "Automatically install the necessary tools"
   - Restart your computer after installation

3. **Verify Installation**:
   - Open PowerShell or Command Prompt
   - Type: `node --version`
   - Type: `npm --version`
   - Both should show version numbers

---

## 📦 After Installing Node.js

Once Node.js is installed, follow these steps:

### 1. Install Dependencies

Open PowerShell in the project folder and run:
```bash
npm install
```

This installs:
- `express` - Web server
- `sqlite3` - Database
- `cors` - API security

### 2. Start the Server

```bash
npm start
```

You should see:
```
✓ Excellence Graphics Account System running on http://localhost:3000
✓ API available at http://localhost:3000/api/customers
Connected to SQLite database
Customers table ready
```

### 3. Open the Application

Open your web browser and go to:
```
http://localhost:3000/index.html
```

Or simply open the `index.html` file directly in your browser.

---

## 🎯 How to Use

### Add a Customer
1. Click the **"Add Customer"** button
2. Fill in the customer name and address
3. Select payment status (None/Partial/Full)
4. Click **"Save Customer"**

### View Customer Details
- Click on any customer card to see full details

### Edit a Customer
- Click the **"Edit"** button on a customer card
- Update the information
- Click **"Save Customer"**

### Delete a Customer
- Click the **"Delete"** button
- Confirm the deletion

### Filter Customers
- Use the filter buttons at the top:
  - **All Customers** - Show everyone
  - **Partial Payment** - Show only partial payments
  - **Full Payment** - Show only full payments

---

## 📁 Project Files

```
Accounts- Excellence Graphics/
├── index.html          # Main application page
├── styles.css          # Premium UI design
├── app.js              # Frontend logic
├── server.js           # Backend server
├── database.js         # Database operations
├── package.json        # Project configuration
├── README.md          # Full documentation
├── SETUP_GUIDE.md     # This file
└── excellence_graphics.db  # Database (created automatically)
```

---

## 🆘 Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in your PATH
- Restart your computer after installing Node.js
- Reinstall Node.js and make sure to check all boxes during installation

### "Cannot connect to server"
- Make sure the server is running (`npm start`)
- Check that it's running on port 3000
- Look for error messages in the PowerShell window

### "Failed to load customers"
- The backend server must be running
- Open PowerShell in the project folder
- Run `npm start`
- Keep this window open while using the application

### Database Issues
- The database file (`excellence_graphics.db`) is created automatically
- If you want to start fresh, delete this file and restart the server

---

## 💡 Tips

- **Keep the server running**: Don't close the PowerShell window while using the app
- **Data persistence**: All customer data is saved in the SQLite database
- **Backup**: To backup your data, copy the `excellence_graphics.db` file
- **Multiple users**: Only one person can use the app at a time on the same computer

---

## 🎨 Features

✨ **Beautiful UI**
- Modern glassmorphic design
- Smooth animations
- Dark theme with vibrant gradients
- Fully responsive

🔧 **Full CRUD Operations**
- Create new customers
- Read/View customer details
- Update customer information
- Delete customers

🎯 **Payment Tracking**
- Track payment status
- Filter by payment type
- Visual payment badges

💾 **Data Persistence**
- SQLite database
- Automatic backups
- No external database needed

---

## 📞 Need Help?

If you encounter any issues:
1. Make sure Node.js is properly installed
2. Check that the server is running
3. Look for error messages in the browser console (F12)
4. Check the PowerShell window for server errors

---

**Ready to get started?** Install Node.js from https://nodejs.org/ and follow the steps above! 🚀
