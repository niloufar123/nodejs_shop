const Product = require('../models/product');
const Cart=require('../models/cart')


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getmyCart=(req, res, next) => {
    res.render('shop/myCart', {
    
      pageTitle: 'myCart',
      path: '/myCart'
    });
  
};

exports.getProduct=(req,res,next)=>{
  const prodId=req.params.productId;
  Product.findOne(prodId,product=>{
    res.render('shop/product-detail',{product:product,
      pageTitle: 'productDetail',
      path: '/products'

    })
  })
  console.log(prodId)
}

exports.getIndex=(req,res,next)=>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
}


exports.getOrder = (req, res, next) => {
  res.render('shop/order', {
    pageTitle: 'Order',
    path: '/order',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.getCheckOut=(req,res,next)=>{
  res.render('shop/checkout',{
    path:'/checkout',
    pageTitle:'CheckOut'
  })
}

exports.addToCart=(req,res,next)=>{
  const id=req.body.productId;
  Product.findOne(id,pro=>{
    console.log(pro)
    Cart.addProduct(id,pro.price);
  })
  console.log(id);
  res.redirect('/myCart')

}