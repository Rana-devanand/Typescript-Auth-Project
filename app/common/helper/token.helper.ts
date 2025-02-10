import jwt from "jsonwebtoken";
const { jwtsecretkey } = require("./config.helper");
interface JWT_payload {
  userid: number;
  email: string;
}

export const generateAccessToken = (payload: JWT_payload) => {
  return jwt.sign(payload, jwtsecretkey, { expiresIn: "1h" });
};

export const generateRefreshToken = (payload: JWT_payload) => {
    return jwt.sign(payload, jwtsecretkey, { expiresIn: "7d" });
}