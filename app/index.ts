import express, { Express, Request, Response } from "express";
const app: Express = express();
import subroutes from "./routes/subroutes";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {PORT} from "./common/helper/config.helper";

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use("/check", (req: Request, res: Response) => {
  res.send("Server is up and running!");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// set base path to /api
app.use("/api", subroutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
