const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const User = require("../models/User");
var { expressjwt: jwt } = require("express-jwt");

dotenv.config();

// Middleware
const requireSingIn = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});

//register
const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //validation
        if (!name) {
            return res.status(400).send({
                success: false,
                message: "name is required",
            });
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: "email is required",
            });
        }
        if (!password || password.length < 6) {
            return res.status(400).send({
                success: false,
                message: "password is required and 6 character long",
            });
        }
        //exisiting user
        const exisitingUser = await User.findOne({ email });
        if (exisitingUser) {
            return res.status(500).send({
                success: false,
                message: "User Already Register With This EMail",
            });
        }
        //hashed pasword
        const hashedPassword = await hashPassword(password);

        //save user
        const user = await User({
            name,
            email,
            password: hashedPassword,
        }).save();
        //TOKEN JWT
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        return res.status(201).send({
            success: true,
            message: "Registeration Successfully",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Register API",
            error,
        });
    }
};

//login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please Provide Email Or Password",
            });
        }
        // find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not Found",
            });
        }
        //match password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(500).send({
                success: false,
                message: "Invalid usrname or password",
            });
        }
        //TOKEN JWT
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // undeinfed password
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "Login successfully",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "error in login api",
            error,
        });
    }
};

//update user
const updateUserController = async (req, res) => {
    try {
        const { name, password, email } = req.body;
        //user find
        const user = await User.findOne({ email });
        //password validate
        if (password && password.length < 6) {
            return res.status(400).send({
                success: false,
                message: "Password is required and should be 6 character long",
            });
        }
        const hashedPassword = password ? await hashPassword(password) : undefined;
        //updated useer
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                name: name || user.name,
                password: hashedPassword || user.password,
            },
            { new: true }
        );
        updatedUser.password = undefined;
        res.status(200).send({
            success: true,
            message: "Profile Updated Please Login",
            updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In User Update Api",
            error,
        });
    }
};

module.exports = {
    requireSingIn,
    registerController,
    loginController,
    updateUserController,
};