import { hashSync } from "bcrypt";
import { prismaClient } from "..";
import { Iuser } from "./user.dto";

export const createuser = async (data: Iuser) => {
  const { name, email, password } = data;
  
  let user = await prismaClient.user.findFirst({
    where: { 
      email: email.toString()
     },
  })
   
  if (user) {
    throw new Error("User already exists");
  }
  user = await prismaClient.user.create({
    data: {
      name : name.toString(),
      email: email.toString(),
      password: hashSync(password.toString(), 10),
    },
  })
  return user;
};
