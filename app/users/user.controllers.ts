import { Request, Response } from "express";
import * as userservices from "./user.services";
import { Iuser } from "./user.dto";
import { CreateResponse } from "../common/helper/response.helper";

export const signup = async (req: Request, res: Response) => {
  const userdata: Iuser = req.body;
  const response = await userservices.createuser(userdata);
  res.json(response);
};

export const login = async (req: Request, res: Response) => {
  const userdata: Iuser = req.body;
  const response = await userservices.login(userdata);
  res.send(CreateResponse(response, "User successfully logged in."));
};
