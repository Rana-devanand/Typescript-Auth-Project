import { Router } from "express";
import { signup } from "./user.controllers";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the User API!" });
});
router.post("/create", signup);

export default router;
  