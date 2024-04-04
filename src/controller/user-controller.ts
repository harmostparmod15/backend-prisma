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
    return res.json({
      success: true,
      message: "successfully signed you up",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log("error from controller");
    return res.json({
      success: false,
      message: "unable to  signed you up",
      data: [],
      error: error,
    });
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
