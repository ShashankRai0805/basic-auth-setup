const { Router } = require("express");
const router = Router();
const checkUser = require("../middlewares/user");
const { User } = require("../db");
const { signupSchema, signinSchema } = require("./validators");
const { error } = require("console");

router.post("/signup", async function(req, res) {
    const parsedResult = signupSchema.safeParse(req.body);

    if (!parsedResult.success) {
        return res.status(400).json({
            msg: "Invalid inputs",
            error: parsedResult.error.errors
        });
    }

    const { username, password, email } = parsedResult.data;

    try {
        await User.create({
            username: username,
            password: password,
            email: email
        });
        res.json({
            msg: "User created successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error creating user",
            error: error.message
        });
    }
});

router.post("/signin", async function(req, res) {
    const parsedResult = signinSchema.safeParse(req.headers);

    if (!parsedResult.success) {
        return res.status(400).json({
            msg: "Invalid inputs",
            errors: parsedResult.error.errors
        });
    }

    const { email, password } = parsedResult.data;

    try {
        const user = await User.findOne({
            email: email,
            password: password
        });

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.json({
            msg: "User found successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error finding the user",
            error: error.message // fixed typo
        });
    }
});

module.exports = router;
