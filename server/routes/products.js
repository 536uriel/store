const checkAuthenticated = require('../helpers/auth');
const productModel = require('../models/product-model');

const router = require('express').Router();


router.get('/',async (req,res)=>{
    const product = await productModel.find({});
    res.send(product);
});

router.post('/',checkAuthenticated,async (req,res) => {
    const {name,price} = req.body;
    const product = new productModel({
        name,
        price
    });
try{
    await product.save()
    res.send('product was posted')

}catch(err){
   res.sendStatus(500)
}
})

module.exports = router;