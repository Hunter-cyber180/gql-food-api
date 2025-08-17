const Schema = require("validate");

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,  // Name field is mandatory
        message: "Name is required!",  // Error message if missing
    },
    email: {
        type: String,
        required: true,  // Email field is mandatory
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,  // Basic email format validation
        message: "Email is not valid!",  // Error message for invalid email
    },
    password: {
        type: String,
        required: true,  // Password field is mandatory
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,  // Strong password requirements
        message: "Password is not strong!",  // Error message for weak password
    },
    phoneNumber: {
        type: String,
        required: true,  // Phone number field is mandatory
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,  // International phone number format
        message: "phoneNumber is not valid!",  // Error message for invalid phone
    },
});

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        message: "Email is not valid!",
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        message: "Password is not strong!",
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        message: "phoneNumber is not valid!",
    },
});


module.exports = {
    registerValidator: (object) => registerSchema.validate(object),
    loginValidator: (object) => loginSchema.validate(object),
};
