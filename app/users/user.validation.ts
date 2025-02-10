import { body } from "express-validator";

export const createUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().isEmail().withMessage("Email is required").isString().withMessage("Please enter a valid email address"),
  body("password").notEmpty().isLength({ min: 4 }).withMessage("Password must be at least 4 characters long"),
];

export const loggedIn = [
    body("email").notEmpty().isEmail().withMessage("Email is required").isString().withMessage("Please enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
]
  