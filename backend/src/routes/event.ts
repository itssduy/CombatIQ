import {Router, Request, Response} from "express"

import { prisma } from "../db/prismaClient.js"

const eventRouter = Router()

eventRouter.get("/", async (req: Request, res: Response) => {
    try {
        let events = await prisma.event.findMany({})
        res.status(200).json({events: events})
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})

eventRouter.get("/:eventId", async (req: Request, res: Response) => {
    try {
        const {eventId} = req.params
        if (typeof eventId !== "string") {
            return res.status(400).json({message: "invalid input"})
        }

        let event = await prisma.event.findUnique({
            where: {
                id: eventId
            }
        })

        res.status(200).json({event: event})
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})

export default eventRouter