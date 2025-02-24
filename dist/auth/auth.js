import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authHandler = (req, res, next) => {
    const token = req.cookies.authCookie;
    console.log(req.cookies, "\n");
    console.log("token : ", token);
    const data = jwt.verify(token, process.env.SECRET_KEY);
    console.log(data);
    next();
};
