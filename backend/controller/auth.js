const User = require('../model/User'); // this is model 

exports.register = async (req, res) => {
    try {
        const { userName, phoneNumber, email, password } = req.body;

        console.log(req.body);

        const finduser= await User.findOne({ email: email, userName: userName, phoneNumber: phoneNumber, password: password });
        if (finduser) {
            return res.status(400).json({ error: 'User already exists', alert: 'User already exists!' });
        }

        // Create the new user
        const createuser = await User.create({
            userName,
            email,
            password,
            phoneNumber,
            hasVoted: false,
            ROLE: "USER"
        });

        res.status(201).json({
            success: true,
            data: createuser,
            alert: 'User registered successfully!'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'Unsuccessful',
            alert: 'An error occurred during registration. Please try again later.'
        });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email: email });


        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }


        if (password !== user.password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        delete user.password;

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: 'unsuccessfull'

        });
    }
};

