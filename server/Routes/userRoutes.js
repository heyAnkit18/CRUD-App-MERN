import express from "express";
import { create } from "../Controller/userController.js";

const router = express.Router();

router.post('/create', create);

export default router;
