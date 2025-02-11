import { body } from "express-validator";

export const memberValidator = [
  body("userId").notEmpty().withMessage("User ID required"),
  body("groupId").notEmpty().withMessage("Group ID required"),
];
