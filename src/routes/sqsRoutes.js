const express = require("express");
const sqsRouter = express.Router();

const aws = require("aws-sdk");

const queueUrl = process.env.SQS_QUEUE_URL;
const sqs = new aws.SQS();

sqsRouter.post("/signatures", async (req, res) => {
  let signatures = [];
  console.log(req.body);
  for (let signature of req.body) {
    const username = signature.name;
    const user_id = signature.id;
    const comment_id = signature.comment_id;
    const repo_id = signature.repoId;
    const pull_request_no = signature.pullRequestNo;
    const created_at = new Date(signature.created_at).getTime();
    signatures.push({
      username: username,
      user_id: user_id,
      comment_id: comment_id,
      repo_id: repo_id,
      pull_request_no: pull_request_no,
      created_at: created_at
    });
  }
  const params = {
    MessageBody: JSON.stringify(signatures),
    QueueUrl: queueUrl,
    DelaySeconds: 0
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = sqsRouter;
