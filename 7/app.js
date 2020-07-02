const express = require('express');
const app = express();
const path = require('path');

const home = require('./routers/home');
const products = require('./routers/products');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', express.static('public')); 


app.use('/home', home);
app.use('/products', products);


app.get('/about', (req, res) => {
    res.render('pages/about')
});

app.get('/contact', (req, res) => {
    res.render('pages/contact')
});




app.listen(5500);
console.log('Server is running on port 5500');