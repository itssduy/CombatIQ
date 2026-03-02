import {Router, Request, Response} from 'express'

import {prisma} from '../db/prismaClient.js'
const socialRouter = Router()

socialRouter.get(":socialId", (req: Request, res: Response) => {
    try {
        const {socialId} = req.params
        if (typeof socialId !== "string") { 
            return res.status(400).json({message: "unknown error"})
        } 
        
        let social = prisma.social.findUnique({
            where: {
                id: socialId
            }
        })

        res.status(200).json({social:social})
        
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})

socialRouter.get(":athleteId", (req: Request, res: Response) => {
    try {
        const {athleteId} = req.params
        if (typeof athleteId !== "string") { 
            return res.status(400).json({message: "unknown error"})
        } 
        
        let social = prisma.social.findMany({
            where: {
                athleteId: athleteId
            }
        })

        res.status(200).json({social: social})
        
    } catch (err) {
        res.status(400).json({message: "unknown error"})
    }
})
export default socialRouter