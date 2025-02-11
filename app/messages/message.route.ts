import { Router } from "express";
const router = Router();

import * as userController from "./message.controller";
import * as userValidator from "./message.validator";
import { catchError } from "../common/middleware/catch.error.middleware";

router.post("/", userValidator.messageValidator,catchError ,userController.create);


export default router;;