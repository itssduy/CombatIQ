import {Router, Request, Response} from "express"
import hashUtil from "../utils/hash.js"
import tokenUtil from "../utils/token.js"
import { prisma } from "../db/prismaClient.js";

const authRouter = Router()

authRouter.post("/login", async (req: Request, res: Response): Promise<void> =>{
    try {

        const {username, password} = req.body;
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
            return
        }
        res.status(200).json({
            token: tokenUtil.createToken({
                userId: user!.id,
                iat: Date.now()
            })
        });
    }
    catch (err) {
        res.status(400).json({
            message: "error"
        })
    } 
})

authRouter.post("/signup", async (req: Request, res: Response): Promise<void> =>{
    
    try {
        const {username, password} = req.body;

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
        res.status(200).json({
            token: tokenUtil.createToken({
                userId: newUser.id,
                iat: Date.now()
            })
        });
    }
    catch (err) {
        res.status(400).json({
            message: "error"
        })
    }
})


export default authRouter