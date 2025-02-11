import { Router } from "express";
import userRoute from "../users/user.routes";
import groupRoute from "../groups/group.route";
import memberRoute from "../membership/member.route";
import messageRoute from "../messages/message.route";

const router: Router = Router();

router.use("/users", userRoute);
router.use("/group", groupRoute);
router.use("/member", memberRoute);
router.use("/message", messageRoute);
export default router;
