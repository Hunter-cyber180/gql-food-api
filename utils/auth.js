const authValidator = async (req) => {
    if (!req)
        throw new Error("Please login first!");

    const authentication_header = req.headers.authorization;
    if (!authentication_header)
        throw new Error("Please login first!");

    const token = authHeader.replace("Bearer ", "");
    if (!token)
        throw new Error("No token found!");
};
