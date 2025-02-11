import { Router } from "express";
const router = Router();

import * as groupController from "./gruop.controller";
import * as groupValidator from "./group.validator";
import { catchError } from "../common/middleware/catch.error.middleware";

router.post("/", groupController.create, catchError, groupController.create);

export default router;
