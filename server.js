const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

// Create express instance and connect to DB
const app = express();
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
