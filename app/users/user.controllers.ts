import { Request, Response } from "express";
import  {createuser} from "./user.services";
import { Iuser } from "./user.dto";

export const signup = async (req: Request, res: Response) => {
  const userdata:Iuser = req.body;
  const response = await createuser(userdata);
  res.json(response);
};
