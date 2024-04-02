// import { PrismaClient } from "@prisma/client/edge";

import express from "express";

import apiRoutes from "./routes/index";

const app = express();

app.use("/api", apiRoutes);

const setupAndStartServer = () => {
  app.listen(3000, () => {
    console.log("server started at 3000");
  });
};

setupAndStartServer();
