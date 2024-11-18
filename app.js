const express = require('express')
const app = express()
const port = 3000

const posts = require('./posts')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

console.log(posts)