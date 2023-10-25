import express from "express";
const app = express();
const PORT = 4000;

app.use(express.json());

import { icebreakerRoutes } from "./routes/icebreakerRoutes.js";
