import express from "express";
import {addVideo, getVideo, addView, random} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router()

router.post('/', verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put('/view/:id', verifyToken, addView)
router.get("/random", random)

export default router