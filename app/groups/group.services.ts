import { prismaClient } from ".."
import { Igroup } from "./group.dto"

export const creategroup = async (value : Igroup) => {
    const {name , type , adminId} = value
    const result = await prismaClient.group.create({
        data:{
            name,
            type,
            adminId
        }
    })
    return result;
}