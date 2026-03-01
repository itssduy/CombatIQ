import express from "express"
import "dotenv/config"

//Routers
import authRouter from './routes/auth.js'
import userRouter from "./routes/users.js"

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/auth", authRouter)
app.use("/users", userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`)
})