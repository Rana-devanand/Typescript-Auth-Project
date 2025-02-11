import { prismaClient } from "..";
import { Imember } from "./member.dto";

export const createMember = async (value: Imember) => {
  const { userId, groupId } = value;
  const result = await prismaClient.membership.create({
    data: {
      userId,
      groupId,
    },
  });
  return result;
}

export const getPendingMembership = async (value: number) => { 
  const result = await prismaClient.membership.findMany({
    where: {
        groupId : value
      }
    })
    return result;
};

export const acceptMembership = async (userId: number , groupId: number ) => {
  console.log(userId, groupId);
  const result = await prismaClient.membership.updateMany({
    where: {
      userId,
      groupId,
    },
    data: {
      status: "accepted",
    },
  });
  return result;
}
