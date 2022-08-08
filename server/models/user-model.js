const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    cart: [
        {
            amount: Number,
            prod_id: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            }
        }
    ]
});

module.exports = mongoose.model('users', userSchema);