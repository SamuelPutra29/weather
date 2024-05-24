const express = require('express');
const app = express();
const port = 3001;

app.get('/api/resource', (req, res) => {
    res.json({ message: 'Resource found!' });
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Sorry, resource not found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
