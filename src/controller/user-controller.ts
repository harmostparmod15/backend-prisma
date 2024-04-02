import UserService from "../service/user-service";

import express from "express";

const userService = new UserService();

export const signupUser = async (
  req: express.Request,
  res: express.Response,
  next: any
) => {
  try {
    const response = await userService.signupUser(req.body);
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log("error from controller");
  }
};

export const signinUser = async (
  req: express.Request,
  res: express.Response,
  next: any
) => {
  try {
    const response = await userService.signinUser(req.body);
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log("error from controller");
  }
};
