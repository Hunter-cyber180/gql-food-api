// * ---- Models ----
const UserModel = require("../../models/User");

// ** ---- Packages ----
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// * ---- Utils ----
const { registerValidator } = require("../../utils/validators/user.validate");

const registerUser = async (_, { input }) => {
    const { name, email, phoneNumber, password, role } = input;

    const validateResult = registerValidator(input);
    const error = validateResult[0] ? validateResult[0].message : undefined;
    if (error)
        throw new Error(error);

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

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "2d",
    });

    return {
        token,
        user,
    };
}

const loginUser = async (_, { input }) => {
    const { email, phoneNumber, password } = input;
    // TODO => validate user data

    const user = await UserModel.findOne({
        $or: [{ email }, { phoneNumber }]
    });

    if (!user)
        throw new Error("Invalid Email/phoneNumber or password!");

    const pass = await bcrypt.compare(password, user.password);
    if (!pass)
        throw new Error("Invalid Email/phoneNumber or password!");
}

module.exports = {
    registerUser,
    loginUser,
}
