import jwt, { Jwt } from "jsonwebtoken";
import fs from "fs";
import { JwtPayload } from "jsonwebtoken";

const privateKey = fs.readFileSync("private.key", "utf-8");
const publicKey = fs.readFileSync("private.key.pub", "utf-8");

function createToken(payload: JwtPayload): string | null{
    try {
        let token = jwt.sign(payload, privateKey, {algorithm: "RS256", expiresIn: "1d"} );
        return token;
    }
    catch (err) {
        console.log(err)
        return null
    }

}

function verifyToken(token: string): JwtPayload | null {
    try {

        let decoded: JwtPayload | string = jwt.verify(token, publicKey)
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