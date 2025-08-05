// * ---- Models ----
const UserModel = require("../../models/User");

// ** ---- Packages ----
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (_, { input }) => {
    const { name, email, phoneNumber, password, role } = input;

    // TODO => validate data

    const isUserExist = await UserModel.findOne({
        $or: [
            { email: email },
            { phoneNumber: phoneNumber }
        ]
    });
    if (isUserExist)
        throw new Error("User already exist!")

    const hashedPassword = await bcrypt.hash(password, 10);
    const hasUser = await UserModel.countDocuments();

    const userObj = {
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        role: hasUser ? role : "ADMIN",
    };

    const user = new UserModel(userObj);
    await user.save();

    // TODO => create token

    return {
        token: "", // temporary
        user,
    };
}

module.exports = {
    registerUser,
}
