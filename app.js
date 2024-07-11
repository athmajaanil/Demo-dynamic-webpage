// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Example data (can be replaced with actual data from a database or other source)
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to my dynamic web service');
});

app.get('/users', (req, res) => {
    res.json(users); // Return users as JSON
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user); // Return user details as JSON
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
