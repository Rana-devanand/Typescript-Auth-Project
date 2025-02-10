import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const jwtsecretkey = process.env.JWT_SECRET_KEY;
