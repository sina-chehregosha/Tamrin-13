const express = require('express');
const router = express.Router();
const path = require('path');


// hessse khubi be in kar nadaram.
const products = [{
    img: "/p1 - mercurial-vapor-360-elite.jpg",
    name: "Mercurial Vapor 360 Elite",
    type: "professional",
    price: "400$"
},{
    img: "/p2 - mercurial dream speed 2.jpg",
    name: "Mercurial Dream Speed 2",
    type: "professional",
    price: "500$"
},{
    img: "/p3 - mercurial-vapor-xiii-elite.jpg",
    name: "Mercurial Vapor XIII Elite",
    type: "professional",
    price: "600$"
}]

router.get('/', (req, res) => {
    res.render('../views/pages/products.ejs', {products});
})

router.get('/product1', (req, res) => {
    // const products = [{
    //     img: "../public/p1 - mercurial-vapor-360-elite.jpg",
    //     name: "Mercurial Vapor 360 Elite",
    //     type: "professional",
    //     price: "400$"
    // },{
    //     img: "../public/p2 - mercurial dream speed 2.jpg",
    //     name: "Mercurial Dream Speed 2",
    //     type: "professional",
    //     price: "500$"
    // },{
    //     img: "../public/p3 - mercurial-vapor-xiii-elite.jpg",
    //     name: "Mercurial Vapor XIII Elite",
    //     type: "professional",
    //     price: "600$"
    // }];

    res.render('../views/pages/product1.ejs', {products});
});

router.get('/product2', (req, res) => {
    res.render('../views/pages/product2.ejs', {products});
});

router.get('/product3', (req, res) => {
    res.render('../views/pages/product3.ejs', {products});
});


module.exports = router;