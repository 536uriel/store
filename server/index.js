



const connectToDb = require('./config/db-connection');
connectToDb();


const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const initializePassport = require('./config/passport-config');
const cors = require('cors')
const path = require("path");
const PORT = process.env.PORT || 1000;


app.use(express.static(path.join(path.resolve(), "..", "build")));
app.use(express.static("public"));

app.use(cors())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());

initializePassport(passport, LocalStrategy);

app.use('/products', require('./routes/products'));
app.use('/',require('./routes/users'));

//to do - understand why do i need both static and send file?
app.use((req, res, next) => {
  res.sendFile(path.join(path.resolve(), "..", "build", "index.html"));
});


// app.post('/products')

// app.put('/products')

// app.delete('/products')



app.listen(PORT, () => {
  console.log('up and running on ' + PORT);
})