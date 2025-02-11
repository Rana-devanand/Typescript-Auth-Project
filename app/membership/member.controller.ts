import { Request, Response } from "express";
import * as memberServices from "./member.serices";
import { CreateResponse } from "../common/helper/response.helper";
import { IMemberPending } from "./member.dto";

export const create = async (req: Request, res: Response) => {
  const result = await memberServices.createMember(req.body);
  res.send(CreateResponse(result, "Memeber Request send successfully"));
};

export const getAllPendingMembers = async (req: Request, res: Response) => {
  const {groupId} = req.params;
  const result = await memberServices.getPendingMembership(Number(groupId));
  res.send(CreateResponse(result, "All pending members fetched successfully"));
}

export const approveMember = async (req: Request, res: Response) => {
  const {userId , groupId} = req.params;
  console.log(userId, groupId);
  const result = await memberServices.acceptMembership(Number(userId), Number(groupId));
  res.send(CreateResponse(result, "Member request accepted successfully"));
}

