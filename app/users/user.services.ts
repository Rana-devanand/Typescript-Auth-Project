import { hashSync } from "bcrypt";
import bcrypt from "bcrypt";
import { prismaClient } from "..";
import { Iuser } from "./user.dto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../common/helper/token.helper";

export const createuser = async (value: Iuser) => {
  const { name, email, password } = value;

  let user = await prismaClient.user.findFirst({
    where: {
      email: email.toString(),
    },
  });
  if (user) {
    throw Error("User already exists");
  }
  user = await prismaClient.user.create({
    data: {
      name: name.toString(),
      email: email.toString(),
      password: hashSync(password.toString(), 10), // Hash password before saving it to the database.
    },
  });
  return user;
};

export const login = async (user: Iuser) => {
  const { email, password } = user;
  const foundUser = await prismaClient.user.findFirst({
    where: {
      email: email.toString(),
    },
  });
  if (!foundUser) {
    throw new Error(" User not found");
  }
  const isPasswordCorrect = await bcrypt.compare(
    password.toString(), // plain password
    foundUser.password // Hash Password
  );
  if (!isPasswordCorrect) {
    throw new Error("Invalid password");
  }
  const data = { userid: foundUser.id, email: foundUser.email };

  const accesstoken = generateAccessToken(data);
  const refreshtoken = generateRefreshToken(data);

  return { ...foundUser, accesstoken, refreshtoken };
};
