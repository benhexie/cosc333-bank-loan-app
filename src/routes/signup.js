const { createUser } = require("../models/users");
const Response = require("../utils/response");

const signup = (req, res) => {
    const { success, failed } = new Response(res);
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
        failed("Missing username or password", "Username or password cannot be empty");
        return;
    }
    if (username.length < 1) {
        failed("Missing username or password", "Username or password cannot be empty");
        return;
    }
    if (password.length < 8) {
        failed("Password too short", "Password must be at least 8 characters long");
        return;
    }
    
    try {
        createUser(username, password, (results) => {
            success("User created", {  });
        });
    } catch (error) {
        res.status(300).json({ message: error.message });
    }
};

module.exports = signup;