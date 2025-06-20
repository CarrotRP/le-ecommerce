const bcrypt = require('bcrypt');

const User = require('../models/userModel');

const user_login = (req, res) => {
    console.log(req.user);
    res.json({ user: req.user });
}

const user_signup = async (req, res) => {
    console.log(req.body);
    const { username, password, role, country, province } = req.body;

    const saltRounds = 10;
    const hashedPw = await bcrypt.hash(password, saltRounds);

    User.create({
        username,
        password: hashedPw,
        role, country, province
    }).then(result => res.json({ result, success: true }))
        .catch(err => res.json(err))
}

const user_logout = (req, res) => {

}

module.exports = {
    user_login,
    user_signup,
    user_logout
}