import express from "express";
import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";

export const app = express();
const PORT = 4000;

app.use(express.json());
