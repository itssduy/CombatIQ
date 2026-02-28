import argon2 from "argon2"

export async function hashPassword(password: Buffer<ArrayBufferLike>){
    try {
       const hash = await argon2.hash(password);
       return hash
    }
    catch (err) {
        return null
    }
}