const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const authValidator = async (req) => {
    if (!req)
        throw new Error("Please login first!");

    const authentication_header = req.headers.authorization;
    if (!authentication_header)
        throw new Error("Please login first!");

    const token = authHeader.replace("Bearer ", "");
    if (!token)
        throw new Error("No token found!");

    const { id } = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await UserModel.findOne({ _id: id });
    return user;
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
