import { NextFunction, RequestHandler } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const authHandler:RequestHandler = (req,res,next:NextFunction)=>{
    const token = req.cookies.authCookie

    console.log(req.cookies,"\n");
    
    console.log("token : ",token);

    const data:JwtPayload|string = jwt.verify(token,process.env.SECRET_KEY as string)

    console.log(data);

    
    

    next()
    

}