import express from "express";
import { create, getAll, getOne, update } from "../Controller/userController.js";

const router = express.Router();

router.post('/create', create);
router.get('/getall', getAll);
router.get('/getone/:id', getOne);
router.put('/update/:id',update);

export default router;
