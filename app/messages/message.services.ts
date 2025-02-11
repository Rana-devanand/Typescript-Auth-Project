import { prismaClient } from ".."
import { Imessage } from "./messgae.dto";


export const createMessage = async (value : Imessage) => {
    const {content , userId , groupId} = value;
     const result = await prismaClient.message.create({
        data : {
            content,
            userId,
            groupId
        }
    })
    return result;
}