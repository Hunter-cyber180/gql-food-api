// * ---- Models ----
const UserModel = require("../../models/User");

// ** ---- Packages ----
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// * ---- Utils ----
const { registerValidator, loginValidator } = require(
    "../../utils/validators/user.validate"
);

// Handles new user registration
const registerUser = async (_, { input }) => {
    // Validate input
    const validateError = registerValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    // Check if user exists
    const existingUser = await UserModel.findOne({
        $or: [{ email: input.email }, { phoneNumber: input.phoneNumber }]
    });
    if (existingUser) throw new Error("User already exists!");

    // Create new user (first user becomes ADMIN)
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const isFirstUser = (await UserModel.countDocuments()) === 0;

    const user = await UserModel.create({
        ...input,
        password: hashedPassword,
        role: isFirstUser ? "ADMIN" : input.role
    });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "2d" });

    return { token, user };
}

// Handles user login
const loginUser = async (_, { input }) => {
    // Validate input
    const validateError = loginValidator(input)[0]?.message;
    if (validateError) throw new Error(validateError);

    // Find user and verify credentials
    const user = await UserModel.findOne({
        $or: [{ email: input.email }, { phoneNumber: input.phoneNumber }]
    });
    if (!user) throw new Error("Invalid credentials");

    const validPassword = await bcrypt.compare(input.password, user.password);
    if (!validPassword) throw new Error("Invalid credentials");

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "2d" });

    return { token, user };
}

module.exports = { registerUser, loginUser };
