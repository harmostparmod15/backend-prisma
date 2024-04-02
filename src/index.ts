import express from "express";
import bodyParser from "body-parser";

import apiRoutes from "./routes/index";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const setupAndStartServer = () => {
  app.listen(3000, () => {
    console.log("server started at 3000");
  });
};

setupAndStartServer();
