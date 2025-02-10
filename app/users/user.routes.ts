import { Router } from "express";
import * as usercontroller from "./user.controllers";
import * as uservalidator from "./user.validation";
import { catchError } from "../common/middleware/catch.error.middleware";

const router = Router();

router
      .post("/", uservalidator.createUser, catchError, usercontroller.signup)
      .post("/login",uservalidator.loggedIn , catchError , usercontroller.login);

// TODO: Add other API routes
export default router;
