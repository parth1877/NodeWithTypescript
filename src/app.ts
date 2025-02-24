import express from "express"
import userRoute from "./routes/userRoutes.js";
import cookieParser from "cookie-parser"

const app = express()

app.listen(8000,()=>{
    console.log("App is running on port 8000");
    
})

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user",userRoute)



