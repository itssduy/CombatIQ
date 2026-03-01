import {Router, Request, Response} from "express"
import { prisma } from '../db/prismaClient.js'

const userRouter = Router()


userRouter.get("/", async (req: Request, res: Response)=>{
    try {


        let users = await prisma.user.findMany({
            select: {
                id: true,
                username: true
            }
        })

        return res.status(200).json({ users: users })
    } catch (err) {
        return res.status(400).json({ message: "error" });
    }
})

userRouter.get("/:userId", async (req: Request, res: Response)=>{
    try {

        const { userId } = req.params;

        if (typeof userId !== "string") {
            return res.status(400).json({ message: "Invalid userId" });
        }

        let user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                username: true
            }
        })

        return res.status(200).json({ user: user })
    } catch (err) {
        return res.status(400).json({ message: "error" });
    }
})

export default userRouter