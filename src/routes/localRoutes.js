const express = require("express");
const dockerRouter = express.Router();
const truffle_connect = require("../connection.js");

dockerRouter.post("/signatures", async (req, res) => {
  console.log(req.body);
  for (let signature of req.body) {
    const username = signature.name;
    const user_id = signature.id;
    const comment_id = signature.comment_id;
    const repo_id = signature.repoId;
    const pull_request_no = signature.pullRequestNo;
    const created_at = new Date(signature.created_at).getTime();
    try {
      let signatureId = await truffle_connect.createSignature(
        username,
        user_id,
        comment_id,
        repo_id,
        pull_request_no,
        created_at
      );
    } catch (error) {
      return response;
    }
  }
  res.json({ success: true });
});

module.exports = dockerRouter;
