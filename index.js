const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index', { title: 'HiveMind', message: 'Welcome to HiveMind!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
