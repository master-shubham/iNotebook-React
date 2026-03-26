const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');

const jwt = require('jsonwebtoken');
// const { wait } = require('@testing-library/user-event/dist/utils');

const JWT_SECRET = 'shubhamisgoodb$oy';

//route-1: create user using: post "api/auth/createuser". no login required 
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be  atleast 4 character').isLength({ min: 4 }),

], async (req, res) => {
    let success = false
    // if any error then give a bad error
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    // check the whether the user with this email existes already
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            success = false
            return res.status(400).json({ success, error: "sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);
        // create a new user
        user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true
        res.json({ success, authtoken });

    } catch (error) {
        success = false
        console.error(success, error.message);
        res.status(500).send("some error occured");
    }
})


// route-2: Authenticate a user using: post "api/auth/login". required 

router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password can not be empty').exists(),

], async (req, res) => {
    let success = false
    // if any error then give a bad error
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    // take email and password then used to check validation.
    const { email, password } = req.body;
    try {

        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "please try to login with correct credentials" });
        }

        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            success = false
            return res.status(400).json({ success, error: "please try to login with correct credentials" });
        }

        // set a id and get authentication token to check proper user.
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})


//route-1:Get Loggedin user details using: post "api/auth/getuser". login required 
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router