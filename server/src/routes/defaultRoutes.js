const express = require("express");
const defaultRouter = express.Router();
const truffle_connect = require("../connection.js");

defaultRouter.get("/health", (req, res) => {
  res.json({ success: "true" });
});

defaultRouter.get("/status", async (req, res) => {
  let paused = await truffle_connect.paused();
  res.json({ paused: paused });
});

defaultRouter.get("/signatures", async (req, res) => {
  const signature_id = parseInt(req.query.signature_id);
  let signature = await truffle_connect.getSignature(signature_id);
  res.json(signature);
});

defaultRouter.get("/users", async (req, res) => {
  let user_id = parseInt(req.query.user_id);
  let signatures = await truffle_connect.getSignaturesOfUser(user_id);
  res.json(signatures);
});

defaultRouter.get("/repos", async (req, res) => {
  let repo_id = parseInt(req.query.repo_id);
  let signatures = await truffle_connect.getSignaturesOfRepo(repo_id);
  res.json(signatures);
});

module.exports = defaultRouter;
