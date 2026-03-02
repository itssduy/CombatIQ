import {Router, Request, Response} from "express"
import { prisma } from "../db/prismaClient.js"

const athleteRouter = Router()

athleteRouter.get("/", async (req: Request, res: Response) => {
    try {
        let athletes = await prisma.athlete.findMany({})
        res.json({athletes: athletes})
    } catch (err) {
        res.status(400).json({message: "error"})
    }
})