import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("working route");
});

export default router;
