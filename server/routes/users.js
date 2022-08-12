const userModel = require('../models/user-model');
const passport = require('passport')
const router = require('express').Router();
const checkAuthenticated = require('../helpers/auth');

router.get('/cart', checkAuthenticated, async (req, res) => {

    const user = await userModel.findById(req.user._id).populate('cart.prod_id');
    console.log(user)
    const products = user.cart;
    if (products.length > 0) {
        return res.send(products)
    }

    res.send('no products to show')

})

router.post('/addToCart', checkAuthenticated, async (req, res) => {
    console.log('/addToCart')
    const { ids } = req.body;
    try {
        const user = await userModel.findById(req.user._id).populate('cart.prod_id')
        console.log(req.user._id)

        let productsInCart = []

        ids.forEach(id => {
            const product = user.cart.find(c => c.prod_id._id == id)

            if (product)
                productsInCart.push(product)

        });

        if (productsInCart.length == 0) {

            let cart = [];


           

            ids.forEach((id,index) => {
                //if its the first id
                if(ids.indexOf(id) == index){
                    cart.push({
                        prod_id: id,
                        amount: 1
                    })
                }else {
                    cart.forEach((c,i) => {
                        if(c.prod_id == id){
                            cart[i].amount++
                        }
                    })
                }
            })
       

            await userModel.updateOne({ email: user.email }, {
                $push: {
                    cart: {
                        $each: cart
                    }
                }
            })

            return res.sendStatus(200)
        }

        //todo: figure how to update in one shoot
        for (let i = 0; i < ids.length; i++) {
            await userModel.updateOne(
                { '_id': user._id, 'cart.prod_id': ids[i] },
                { $inc: { 'cart.$.amount': 1 } }
            )
        }


        res.send(200)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }



})

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    newUser = new userModel({
        email,
        password
    });

    try {
        await newUser.save();

        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }

})



//to do: login with react ui
router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.send({ _id: req.user._id, username: req.user.email })
    }
);

router.get('/logout', checkAuthenticated ,(req, res) => {
    req.logout(function (err) {
        if (err) { return res.send(err); }
        res.redirect('/');
    })
})

module.exports = router;
