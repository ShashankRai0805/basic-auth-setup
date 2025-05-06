// validators.js
const { z } = require("zod");

const signupSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password should be at least 3 characters long")
});

const signinSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password should be at least 3 characters long")
});

module.exports = {
    signupSchema,
    signinSchema
};
