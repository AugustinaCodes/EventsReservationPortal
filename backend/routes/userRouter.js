import express from 'express'

const router = express.Router();

router.get("/profile");
router.delete("/reservation/:id")

export default router;