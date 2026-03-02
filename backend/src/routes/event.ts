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

eventRouter.post("/", async (req: Request, res: Response) => {
    try {
        const {name, location} = req.body


        let event = await prisma.event.create({
            data: {
                name,
                location
            }
        })

        res.status(200).json({message: "successfully created"})
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})
eventRouter.put("/:eventId", async (req: Request, res: Response) => {
    try {
        const {eventId} = req.params
        const {name, location} = req.body

        if (typeof eventId !== "string") {
            return res.status(400).json({message: "invalid input"})
        }
        await prisma.event.update({
            where: {
                id: eventId
            },
            data: {
                name,
                location
            }
        })

        res.status(200).json({message: "successfully updated"})
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})
export default eventRouter