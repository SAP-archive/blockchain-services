const app = require("./app");
const port = 3000;
const dockerRouter = require("./routes/localRoutes");

app.use(dockerRouter);
app.listen(port);
console.log(`listening on http://localhost:${port}`);
