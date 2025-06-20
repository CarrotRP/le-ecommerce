const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local');
const session = require('express-session');
require('dotenv').config();

const productRouter = require('./routes/products')
const userRouter = require('./routes/users')

const User = require('./models/userModel');

const dbURI = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@le-ecommerce.emqrlme.mongodb.net/le-ecommerce?retryWrites=true&w=majority&appName=le-ecommerce`

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

mongoose.connect(dbURI)
    .then(res => app.listen(process.env.PORT))
    .catch(err => console.log(err));

app.use(express.json());

app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    // cookie: {secure: true}
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
        .then(async data => {
            if (!data) return done(null, false, { message: 'no user with that name' })
            if (await bcrypt.compare(password, data.password) == false) {
                return done(null, false);
            }
            return done(null, data)
        })
}))

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(result => done(null, result))
        .catch(err => console.log(err));
})

app.use('/user', userRouter);
app.use('/product', productRouter)