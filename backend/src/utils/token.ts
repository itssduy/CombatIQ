import jwt from "jsonwebtoken";
import fs from "fs";
import { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = fs.readFileSync("private.key", "utf-8");
const JWT_PUBLIC = fs.readFileSync("private.key", "utf-8");

function createToken(payload: any): string | null{
    try {
        var token = jwt.sign(payload, JWT_SECRET, {algorithm: "RS256", expiresIn: "1d"} );
        return token;
    }
    catch (err) {
        return null
    }

}

function verifyToken(token: string): JwtPayload | null {
    try {

        var decoded: JwtPayload | string = jwt.verify(token, JWT_PUBLIC)
        if (typeof decoded == "string") {
            return null
        }

        return decoded
    } 
    catch (err){
        return null
    }

}

export default {
    createToken,
    verifyToken
}