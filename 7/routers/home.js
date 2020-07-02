const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('../views/pages/home.ejs');
});

router.get('/search', (req, res) => {
    console.log('search router run');
    console.log(req.params.search);
    res.render('../views/pages/home.ejs');
});


module.exports = router;