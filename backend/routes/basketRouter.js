import express from 'express';

const router = express.Router();

router.get("/");
router.post("/add")
router.post("/remove")
router.post("/checkout")

export default router;