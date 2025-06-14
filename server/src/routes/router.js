import { Router } from "express";
import { isLoggedInAPI } from "../middlewares/authMiddleware.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import issueRouter from "./issueRouter.js";
import projectRouter from "./projectRouter.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("hola terra")
})

router.use("/", authRouter);
router.use("/issue", isLoggedInAPI, issueRouter);
router.use("/user", isLoggedInAPI, isAdmin, userRouter);
router.use("/project", isLoggedInAPI, projectRouter);

export default router