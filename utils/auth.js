const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const authValidator = async (req) => {
    // 1. Check if request object exists
    if (!req)
        throw new Error("Please login first!");

    // 2. Verify authorization header exists
    const authHeader = req.headers.authorization;
    if (!authHeader)
        throw new Error("Authorization header is missing!");

    // 3. Extract and verify JWT token
    const token = authHeader.replace("Bearer ", "");
    if (!token)
        throw new Error("No token found in authorization header!");

    try {
        // 4. Verify and decode the JWT token
        const { id } = jwt.verify(token, process.env.TOKEN_KEY);

        // 5. Find user in database
        const user = await UserModel.findById(id);
        if (!user)
            throw new Error("User not found!");

        return user;
    } catch (error) {
        // Handle specific JWT errors
        if (error instanceof jwt.JsonWebTokenError) {
            throw new Error("Invalid token!");
        }
        if (error instanceof jwt.TokenExpiredError) {
            throw new Error("Token expired!");
        }

        // Re-throw other errors
        throw error;
    }
};

const adminValidator = async (request) => {
    const { role } = await authValidator(request);
    if (role !== "ADMIN")
        throw new Error("You don't have access!");
}

module.exports = {
    authValidator,
    adminValidator,
};
