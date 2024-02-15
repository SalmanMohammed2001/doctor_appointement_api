import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/UserController";
import {authenticate, restrict} from "../middleWare/VerifyToken";


const router=express.Router()

router.get("/find/:id",authenticate,restrict(["patient"]),getSingleUser)
router.get("/findAll",authenticate,restrict(["admin"]),getAllUser)
router.put("/update/:id",authenticate,restrict(["patient"]),updateUser)
router.delete("/delete/:id",authenticate,restrict(["patient"]),deleteUser)

//module.exports=router
export default router