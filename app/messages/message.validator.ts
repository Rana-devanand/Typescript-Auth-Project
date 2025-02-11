import { body } from "express-validator";

export const messageValidator = [
  body("content").notEmpty().withMessage("Message is not empty"),
  body("userId").notEmpty().withMessage("User is not empty"),
];
