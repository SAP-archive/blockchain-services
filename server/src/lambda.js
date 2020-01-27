const serverless = require("serverless-http");
const app = require("./app");
const sqsRouter = require("./routes/sqsRoutes");

app.use(sqsRouter);
module.exports.handler = serverless(app);
