import { body } from "express-validator";

const registerValidator = [
  body("email").isEmail(),
  body("password").isLenght({ min: 5 }),
  body("fullName").isLenght({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];
