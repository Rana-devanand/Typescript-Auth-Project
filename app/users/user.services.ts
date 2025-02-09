import { prismaClient } from "..";
import Iuser from "./user.dto";

export const createuser = async (data: Iuser) => {
  const { name, email, password } = data;
};
