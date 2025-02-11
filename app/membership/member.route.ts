import { Router } from "express";
const router = Router();

import * as memberControllers from "./member.controller";
import * as memberValidator from "./member.validator";
import  {catchError} from "../common/middleware/catch.error.middleware"


router
    .post("/", memberValidator.memberValidator,catchError ,memberControllers.create)
    .get('/:groupId', catchError, memberControllers.getAllPendingMembers)
    .put('/:userId/:groupId', catchError, memberControllers.approveMember)


export default router;