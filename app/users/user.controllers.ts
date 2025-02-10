import { Request, Response } from "express";
import * as userservices from "./user.services";
import { Iuser } from "./user.dto";
import { CreateResponse } from "../common/helper/response.helper";
import { CustomRequest } from "../common/middleware/user.auth.middleware";
import redisClient from "../common/helper/redis.helper";

export const signup = async (req: Request, res: Response) => {
  const userdata: Iuser = req.body;
  const response = await userservices.createuser(userdata);
  res.send(CreateResponse(response, "User created successfully"));
};

export const login = async (req: Request, res: Response) => {
  const userdata: Iuser = req.body;
  const response = await userservices.login(userdata);
  res.send(CreateResponse(response, "User successfully logged in."));
};

export const profile = async (req: CustomRequest, res: Response) => {
  const user = req.user;
  console.log(user);
  res.json(CreateResponse(user, "User profile fetched."));
};

export const logout = async (req: CustomRequest, res: Response) => {
  const token = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null)
  await redisClient.set(token, 'logout', 'EX' , 600);
  res.clearCookie("token");
  res.send(CreateResponse({}, "User successfully logged out."));
};