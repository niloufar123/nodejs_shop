const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/product/:productId',shopController.getProduct);

router.get('/order',shopController.getOrder);


router.get('/checkOut',shopController.getCheckOut);

router.get('/myCart',shopController.getmyCart);

router.post('/myCart',shopController.addToCart);





module.exports = router;
