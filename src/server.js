import app from "./app.js";

const port = process.env.APP_PORT | 3000;
app.listen(port, () => {
  console.log(`ExpressCommerce listening on port ${port}`);
});
