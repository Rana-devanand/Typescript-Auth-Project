import { Request, Response } from "express";
import * as messageServices from "./message.services";
import { CreateResponse } from "../common/helper/response.helper";

export const create = async (req: Request, res: Response) => {
  const result = await messageServices.createMessage(req.body);
  res.send(CreateResponse(result, "Message Send Success"));
};
