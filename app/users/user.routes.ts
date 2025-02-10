import { Router } from "express";
import * as usercontroller from "./user.controllers";
import * as uservalidator from "./user.validation";
import * as usermiddleware from "../common/middleware/catch.error.middleware";
const  {userAuth} = require("../common/middleware/user.auth.middleware");

const router = Router();

router
  .post("/", uservalidator.createUser, usermiddleware.catchError, usercontroller.signup)
  .post("/login", uservalidator.loggedIn, usermiddleware.catchError, usercontroller.login)
  .post("/profile", userAuth , usercontroller.profile)
  .post("/logout", userAuth , usercontroller.logout) 

// TODO: Add other API routes
export default router;
