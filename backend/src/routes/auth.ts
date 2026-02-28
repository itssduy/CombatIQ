import express from "express";
import { Request, Response } from "express";

import { prisma } from "../db/prismaClient.js";

const authRouter = express.Router()

authRouter.post("/login",(req: Request, res: Response): void =>{
    console.log(req.body)
    res.json("hello")
})


export default authRouter