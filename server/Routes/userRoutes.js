import express from "express";
import { create, getAll, getOne } from "../Controller/userController.js";

const router = express.Router();

router.post('/create', create);
router.get('/getall', getAll);
router.get('/getone/:id', getOne);

export default router;
