import express from "express";
import * as icebreaker from "../controllers/icebreakerController.js";

export const icebreakerRoutes = express.Router();

icebreaker.get("/conversation_starter", function (req, res) {});
