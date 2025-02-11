import { Request , Response } from "express";
import * as groupservice from "./group.services";
import { CreateResponse } from "../common/helper/response.helper";

export const create = async(req: Request, res : Response) => {
    const result = await groupservice.creategroup(req.body)
    res.send(CreateResponse(result, "Group created successfully"));
}