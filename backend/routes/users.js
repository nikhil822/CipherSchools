import express from "express";
import { update, deleteUser, getUser, like, dislike} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router()

router.put('/:id', verifyToken, update)

router.delete('/:id', verifyToken, deleteUser)

router.get("/find/:id", getUser);

router.put("/like/:videoId", verifyToken, like);

router.put("/dislike/:videoId", verifyToken, dislike);

export default router

// , deleteUser, getUser, like, dislike 