import express from "express";

import { signupUser, signinUser } from "../../controller/user-controller";

const router = express.Router();

// SIGN UP ROUTE
router.post("/signup", signinUser);

// SIGN IN ROUTE
router.get("/signin", signinUser);

export default router;
