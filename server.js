const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/books', async (req, res) => {
    try {
        const response = await axios.get('https://openlibrary.org/search.json?q=programming');
        res.json(response.data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown'
        })));
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
