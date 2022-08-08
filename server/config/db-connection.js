const mongoose = require('mongoose');

module.exports =  async function connectToDb() {
    try {
        await mongoose.connect('mongodb://localhost/my_database');
        console.log('connected to db')

    } catch (err) {
        console.log(err)
    }

}


