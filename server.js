import express from "express";
import cors from "cors";
import connectDb from "./db/db";
import authRoute from "./routes/AuthRoute";
import TransctionRoute from "./routes/TransctionRoute";
import { PORT } from "./config";
import path from 'path'

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/transction", TransctionRoute);

// static files
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
