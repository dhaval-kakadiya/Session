const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.ejsLogin = async (req,res) => {
    res.render('login');
}
exports.ejsSignup = async (req,res) => {
    res.render('signup');
}
exports.dashboard = async (req,res) => {
    res.render('dashboard');
}

exports.signup =async (req,res) => {
    try {
        const password = req.body.password;
        const hasPw = await bcrypt.hash(password,12);
        const user = new User();

        user.name = req.body.name,
        user.email = req.body.email,
        user.password = hasPw

        const newUser = await user.save();

        return res.status(200).redirect('/api/login')
    
    } catch (error) {
        return res.status(401).redirect('/api/signup')       
    }
}

exports.login = async(req,res) => {
    try {
        const email = req.body.email
        const password = req.body.password;
        

        const user = await User.findOne({email});
        if(!user){
            return res.status(422).redirect('/api/signup')
        }
        console.log(user);

        const matchPw = await bcrypt.compare(password,user.password)
        if(!matchPw){
            return res.status(422).redirect('/api/login')
        }

        // req.session.user = user.email;

        return res.status(422).redirect('/api/dashboard')
    } catch (error) {
        return res.status(500).redirect('/api/signup')
    }
}