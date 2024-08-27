import { app } from "./app.js";
import { config } from "dotenv";
config();

const port = process.env.PORT || 7652;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
