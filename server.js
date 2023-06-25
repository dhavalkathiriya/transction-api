import express from "express";
import cors from "cors";
import connectDb from "./db/db";
import authRoute from "./routes/AuthRoute";
import TransctionRoute from "./routes/TransctionRoute";
import { PORT } from "./config";

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/transction", TransctionRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
