import express from "express";
import { Request, Response } from "express";
import hashUtil from "../utils/hash.js"
import tokenUtil from "../utils/token.js"
import { prisma } from "../db/prismaClient.js";

const authRouter = express.Router()

authRouter.post("/login", async (req: Request, res: Response): Promise<void> =>{
    const {username, password} = req.body;
    try {

        let hash = await hashUtil.hashPassword(password);
        if(!hash) {
            throw new Error("hashing failed");
        }
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if (!user) {
            res.status(404).json({message: "user not found"})
        }
        res.json({
            token: tokenUtil.createToken({
                userId: user!.id,
                iat: Date.now()
            })
        });
    }
    catch (err) {
        console.log(err)
        res.json({
            message: "error"
        })
    } 
})

authRouter.post("/signup", async (req: Request, res: Response): Promise<void> =>{
    const {username, password} = req.body;
    
    try {

        let hash = await hashUtil.hashPassword(password);
        if(!hash) {
            throw new Error("hashing failed");
        }
        const newUser = await prisma.user.create({
            data: {
                "username": username,
                "hash": hash
            }
        })
        res.json({
            token: tokenUtil.createToken({
                userId: newUser.id,
                iat: Date.now()
            })
        });
    }
    catch (err) {
        console.log(err)
        res.json({
            message: "error"
        })
    }
})


export default authRouter