const express = require('express');
const router = express.Router();

const validator = require('../middleware/validator');

const{ejsLogin,ejsSignup,dashboard,login,signup} = require('../controllers/authcontroller')

router.get('/login',ejsLogin)
router.post('/login',login)

router.get('/signup',ejsSignup)
router.post('/signup',validator('user'),signup)

router.get('/dashboard',dashboard)


module.exports = router