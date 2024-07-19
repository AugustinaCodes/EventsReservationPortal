import express from "express"
import authRouter from './authRouter.js'
import userRouter from './userRouter.js'
import placesRouter from './placesRouter.js'
import reservationRouter from './reservationRouter.js'
import basketRouter from './basketRouter.js'

const router = express.Router();

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/places", placesRouter)
router.use("/reservations", reservationRouter)
router.use("/basket", basketRouter)

export default router;