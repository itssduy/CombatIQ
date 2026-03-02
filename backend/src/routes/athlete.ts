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
athleteRouter.get(":athleteId", async (req: Request, res: Response) => {
    try {
        const athleteId = req.params.athleteId

        if (typeof athleteId !== "string") {
            return res.status(400).json({ message: "Invalid userId" });
        }

        let athletes = await prisma.athlete.findUnique({
            where: {
                id: athleteId
            }
        })
        res.json({athletes: athletes})
    } catch (err) {
        res.status(400).json({message: "error"})
    }
})

athleteRouter.post("", async (req: Request, res: Response) => {
    try {
        const {firstName, lastName, nickname, bio} = req.body

        await prisma.athlete.create({
            data: {
                firstName,
                lastName,
                nickname,
                bio,
            }
        })
        res.json(200).json({message: "successfully created athlete"})
    } catch (err) {
        res.status(400).json({message: "error"})
    }
})

athleteRouter.delete("/:atheleteId", async (req: Request, res: Response) => {
    try {
        const {athleteId} = req.params

        if (typeof athleteId != "string") {
            return res.status(400).json({message: "invalid athleteId"})
        }
        await prisma.athlete.delete({
            where: {
                id: athleteId
            }
        }) 

        return res.status(200).json({message: "successfully deleleted"})
    }
    catch (err) {
        res.send(400).json({message: "error"})
    }
})

athleteRouter.put("/:athleteId", async (req: Request, res: Response) => {
    try {
        const {athleteId} = req.params
        const {firstName, lastName, nickname, bio, socials} = req.body

        if (typeof athleteId !== "string") {
            return res.status(400).json({message: "invalid id"})
        }
        await prisma.athlete.update({
            where: {
                id: athleteId
            },
            data: {
                firstName,
                lastName,
                nickname,
                bio,
                socials
            }
        })
        return res.status(200).json({message: "successfully updated athlete"})
    }
    catch (err) {
        res.status(400).json({message: "unkown error"})
    }
})