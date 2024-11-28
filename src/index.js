import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})