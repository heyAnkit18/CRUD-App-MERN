import express from "express";
import { create, getAll } from "../Controller/userController.js";

const router = express.Router();

router.post('/create', create);
router.get('/getall', getAll);

export default router;
