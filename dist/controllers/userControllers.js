import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const userData = [];
const Register = (req, res) => {
    try {
        const user = req.body;
        if (!user.userName || !user.email || !user.password) {
            res.status(500).json({
                success: false,
                message: "All fields are required"
            });
        }
        userData.push({
            userName: user.userName,
            email: user.email,
            password: user.password
        });
        res.status(200).json({
            success: true,
            message: "Registered Successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};
const login = (req, res) => {
    try {
        const user = req.body;
        console.log("User 1", user);
        let isUserPresent = false;
        let presentUser = null;
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].userName === user.userName && userData[i].password === user.password) {
                isUserPresent = true;
                presentUser = userData[i];
            }
        }
        if (!isUserPresent) {
            res.status(500).json({
                success: false,
                message: "Please register first"
            });
        }
        const data = {
            userName: presentUser === null || presentUser === void 0 ? void 0 : presentUser.userName,
            email: presentUser === null || presentUser === void 0 ? void 0 : presentUser.email
        };
        const token = jwt.sign(data, process.env.SECRET_KEY, {
            expiresIn: "2d"
        });
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
        };
        console.log("res is under this");
        res.status(200).cookie("authCookie", token, options).json({
            success: true,
            message: "Successfuly login"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};
const getUser = (req, res) => {
};
const userAuth = {
    Register,
    login,
    getUser
};
export default userAuth;
